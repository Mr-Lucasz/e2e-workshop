#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

async function cleanup() {
  console.log('🧹 Iniciando limpeza do projeto...\n');

  try {
    // 1. Parar processos que possam estar usando os arquivos
    console.log('1️⃣ Parando processos...');
    try {
      execSync('taskkill /f /im node.exe', { stdio: 'ignore' });
      console.log('✅ Processos Node.js parados');
    } catch (error) {
      console.log('ℹ️ Nenhum processo Node.js ativo');
    }

    // 2. Remover diretórios problemáticos
    console.log('2️⃣ Removendo diretórios...');
    const dirsToRemove = [
      'node_modules',
      'cypress/results',
      'cypress/reports',
      'cypress/screenshots',
      'cypress/videos'
    ];

    for (const dir of dirsToRemove) {
      if (await fs.pathExists(dir)) {
        await fs.remove(dir);
        console.log(`✅ Removido: ${dir}`);
      }
    }

    // 3. Remover arquivos de lock
    console.log('3️⃣ Removendo arquivos de lock...');
    const filesToRemove = [
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml'
    ];

    for (const file of filesToRemove) {
      if (await fs.pathExists(file)) {
        await fs.remove(file);
        console.log(`✅ Removido: ${file}`);
      }
    }

    // 4. Limpar cache do npm
    console.log('4️⃣ Limpando cache...');
    try {
      execSync('npm cache clean --force', { stdio: 'inherit' });
      console.log('✅ Cache do npm limpo');
    } catch (error) {
      console.log('⚠️ Erro ao limpar cache do npm');
    }

    // 5. Reinstalar dependências
    console.log('5️⃣ Reinstalando dependências...');
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependências reinstaladas');
    } catch (error) {
      console.log('❌ Erro ao reinstalar dependências');
      console.log('💡 Tente executar manualmente: npm install');
    }

    console.log('\n🎉 Limpeza concluída com sucesso!');
    console.log('🚀 Agora você pode executar: npm run test:all');

  } catch (error) {
    console.error('❌ Erro durante a limpeza:', error.message);
    console.log('💡 Execute os comandos manualmente:');
    console.log('   rm -rf node_modules');
    console.log('   rm package-lock.json');
    console.log('   npm cache clean --force');
    console.log('   npm install');
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  cleanup();
}

module.exports = { cleanup };
