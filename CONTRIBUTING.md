# 🤝 Guia de Contribuição

> **Bem-vindo ao Workshop de Automação E2E!** 🎉
> 
> Este documento fornece diretrizes para contribuir com o projeto. Sua contribuição é muito bem-vinda!

## 📋 Índice

- [🚀 Como Começar](#-como-começar)
- [🔧 Configuração do Ambiente](#-configuração-do-ambiente)
- [📝 Tipos de Contribuição](#-tipos-de-contribuição)
- [📋 Processo de Contribuição](#-processo-de-contribuição)
- [🎯 Padrões de Código](#-padrões-de-código)
- [🧪 Testes](#-testes)
- [📚 Documentação](#-documentação)
- [❓ Dúvidas e Suporte](#-dúvidas-e-suporte)

## 🚀 Como Começar

### 1. **Fork o Projeto**
```bash
# Clique no botão "Fork" no GitHub
# Clone seu fork localmente
git clone https://github.com/SEU_USUARIO/automation-test.git
cd automation-test
```

### 2. **Configure o Remote Upstream**
```bash
git remote add upstream https://github.com/Mr-Lucasz/automation-test.git
git fetch upstream
```

### 3. **Crie uma Branch para sua Feature**
```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

## 🔧 Configuração do Ambiente

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn
- Git
- Editor de código (VS Code recomendado)

### **Instalação**
```bash
# Instale as dependências
npm install

# Verifique se tudo está funcionando
npm run cypress:open
```

### **Extensões Recomendadas para VS Code**
- **Cucumber (Gherkin) Full Support**
- **Cypress Snippets**
- **ESLint**
- **Prettier**

## 📝 Tipos de Contribuição

### ✨ **Novas Funcionalidades**
- Novos cenários de teste
- Novas páginas para Page Objects
- Novos comandos customizados
- Novas fixtures de dados

### 🔧 **Melhorias**
- Refatoração de código existente
- Otimizações de performance
- Melhorias na arquitetura
- Atualizações de dependências

### 🐛 **Correções de Bugs**
- Correção de testes quebrados
- Correção de problemas de configuração
- Correção de documentação desatualizada

### 📚 **Documentação**
- Melhorias no README
- Exemplos de uso
- Guias de configuração
- Screenshots e diagramas

## 📋 Processo de Contribuição

### 1. **Verifique as Issues Existentes**
- Procure por issues abertas que você pode resolver
- Comente na issue que você está trabalhando nela
- Evite duplicação de trabalho

### 2. **Desenvolva sua Feature**
- Siga os padrões de código estabelecidos
- Escreva testes para novas funcionalidades
- Mantenha os testes existentes funcionando

### 3. **Commit suas Mudanças**
```bash
# Use mensagens de commit claras e descritivas
git commit -m "feat: adiciona teste para filtro de produtos por preço

- Implementa cenário de filtro por faixa de preço
- Adiciona validação de resultados
- Atualiza documentação relacionada"
```

### 4. **Push e Pull Request**
```bash
git push origin feature/nova-funcionalidade
# Crie um Pull Request no GitHub
```

### 5. **Template do Pull Request**
```markdown
## 📝 Descrição
Breve descrição das mudanças implementadas.

## 🎯 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Melhoria
- [ ] Documentação
- [ ] Refatoração

## 🧪 Testes
- [ ] Testes passaram localmente
- [ ] Novos testes foram adicionados
- [ ] Testes existentes foram atualizados

## 📸 Screenshots (se aplicável)
Adicione screenshots das mudanças visuais.

## ✅ Checklist
- [ ] Código segue os padrões estabelecidos
- [ ] Documentação foi atualizada
- [ ] Testes foram executados com sucesso
- [ ] Não há conflitos de merge
```

## 🎯 Padrões de Código

### **JavaScript/TypeScript**
```javascript
// Use ES6+ features
const loginPage = new LoginPage();

// Use async/await para operações assíncronas
async function performLogin() {
  await loginPage.visit();
  await loginPage.login(username, password);
}

// Use nomes descritivos para variáveis e funções
const validCredentials = {
  username: 'standard_user',
  password: 'secret_sauce'
};
```

### **Gherkin (Cucumber)**
```gherkin
Feature: Gerenciamento de Carrinho
  Como um usuário logado
  Quero gerenciar itens no carrinho
  Para finalizar minha compra

  Background:
    Given que estou logado como "standard_user"
    And estou na página de produtos

  Scenario: Adicionar produto ao carrinho
    When seleciono o produto "Sauce Labs Backpack"
    And clico no botão "Add to cart"
    Then o produto deve ser adicionado ao carrinho
    And o contador do carrinho deve mostrar "1"
```

### **Page Objects**
```javascript
export class ProductPage {
  // Seletores centralizados
  elements = {
    addToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    cartCounter: '.shopping_cart_badge',
    productTitle: '.inventory_item_name'
  };

  // Métodos públicos
  addToCart() {
    cy.get(this.elements.addToCartButton).click();
    return this;
  }

  validateCartCounter(expectedCount) {
    cy.get(this.elements.cartCounter)
      .should('be.visible')
      .and('contain', expectedCount);
    return this;
  }
}
```

## 🧪 Testes

### **Executar Testes**
```bash
# Todos os testes
npm run cypress:run

# Testes específicos
npx cypress run --spec "cypress/e2e/features/Login.feature"

# Interface gráfica
npm run cypress:open
```

### **Novos Testes**
- Cada nova funcionalidade deve ter testes correspondentes
- Use dados de teste realistas
- Evite dependências entre testes
- Mantenha testes independentes e isolados

### **Testes de Regressão**
- Execute a suíte completa antes de submeter um PR
- Verifique se não quebrou funcionalidades existentes
- Mantenha a cobertura de testes alta

## 📚 Documentação

### **README.md**
- Mantenha atualizado com novas funcionalidades
- Adicione exemplos de uso
- Inclua screenshots quando relevante

### **Comentários no Código**
```javascript
/**
 * Realiza login na aplicação
 * @param {string} username - Nome do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<void>}
 */
async login(username, password) {
  // Implementação...
}
```

### **Changelog**
- Documente mudanças significativas
- Use formato semântico de versionamento
- Mantenha histórico de mudanças

## ❓ Dúvidas e Suporte

### **Canais de Comunicação**
- **Issues do GitHub**: Para bugs e sugestões
- **Discussions**: Para dúvidas e debates
- **Pull Requests**: Para contribuições diretas

### **Recursos Úteis**
- [Documentação do Cypress](https://docs.cypress.io/)
- [Documentação do Cucumber](https://cucumber.io/docs/)
- [Guia de BDD](https://cucumber.io/docs/bdd/)

### **Comunidade**
- Participe de eventos de QA
- Compartilhe conhecimento
- Ajude outros contribuidores

---

## 🌟 **Reconhecimento**

Todas as contribuições serão reconhecidas no README do projeto. Contribuidores ativos receberão:

- 📛 Badge de "Contribuidor"
- 🏆 Menção especial no README
- 📧 Agradecimento pessoal
- 🎉 Inclusão na lista de colaboradores

---

<div align="center">

**🎯 Sua contribuição faz a diferença!**

**Junte-se à comunidade de QA e ajude a tornar este workshop ainda melhor! 🚀**

</div>
