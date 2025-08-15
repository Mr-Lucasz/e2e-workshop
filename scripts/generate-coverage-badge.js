#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function generateCoverageBadge() {
  try {
    // Ler métricas do último teste
    const metricsPath = path.join(__dirname, '../cypress/results/metrics.json');
    
    if (!await fs.pathExists(metricsPath)) {
      console.log('❌ Métricas não encontradas. Execute os testes primeiro.');
      return;
    }

    const metrics = await fs.readJson(metricsPath);
    const coverage = metrics.coverage || 0;

    // Definir cor baseada na coverage
    let color = 'red';
    if (coverage >= 90) color = 'brightgreen';
    else if (coverage >= 80) color = 'green';
    else if (coverage >= 70) color = 'yellowgreen';
    else if (coverage >= 60) color = 'yellow';
    else if (coverage >= 50) color = 'orange';

    // Gerar badge SVG
    const badgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <mask id="a">
        <rect width="120" height="20" rx="3" fill="#fff"/>
      </mask>
      <g mask="url(#a)">
        <path fill="#555" d="M0 0h67v20H0z"/>
        <path fill="${color}" d="M67 0h53v20H67z"/>
        <path fill="url(#b)" d="M0 0h120v20H0z"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="33.5" y="15" fill="#010101" fill-opacity=".3">coverage</text>
        <text x="33.5" y="14">coverage</text>
        <text x="93.5" y="15" fill="#010101" fill-opacity=".3">${coverage}%</text>
        <text x="93.5" y="14">${coverage}%</text>
      </g>
    </svg>`;

    // Salvar badge
    const badgePath = path.join(__dirname, '../cypress/results/coverage-badge.svg');
    await fs.writeFile(badgePath, badgeSvg);

    // Atualizar README com badge dinâmico
    const readmePath = path.join(__dirname, '../README.md');
    let readmeContent = await fs.readFile(readmePath, 'utf8');

    // Substituir badge estático por dinâmico
    const staticBadgeRegex = /\[!\[Test Coverage\].*?\]\(.*?\)/;
    const dynamicBadge = `[![Test Coverage](cypress/results/coverage-badge.svg)](cypress/results/metrics.json)`;

    if (staticBadgeRegex.test(readmeContent)) {
      readmeContent = readmeContent.replace(staticBadgeRegex, dynamicBadge);
    } else {
      // Adicionar badge se não existir
      const badgeInsertionPoint = readmeContent.indexOf('[![Course]');
      if (badgeInsertionPoint !== -1) {
        const beforeBadge = readmeContent.substring(0, badgeInsertionPoint);
        const afterBadge = readmeContent.substring(badgeInsertionPoint);
        readmeContent = beforeBadge + dynamicBadge + '\n' + afterBadge;
      }
    }

    await fs.writeFile(readmePath, readmeContent);

    console.log(`✅ Badge de coverage gerado: ${coverage}%`);
    console.log(`📁 Salvo em: ${badgePath}`);
    console.log(`📝 README atualizado com badge dinâmico`);

  } catch (error) {
    console.error('❌ Erro ao gerar badge:', error.message);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  generateCoverageBadge();
}

module.exports = { generateCoverageBadge };
