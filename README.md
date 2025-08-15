# 🚀 Workshop de Automação E2E com Cypress + Cucumber

[![Cypress](https://img.shields.io/badge/Cypress-13.7.1-green.svg)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-20.0.2-brightgreen.svg)](https://cucumber.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/lucas-egswf/automation-test/graphs/commit-activity)

> **Workshop prático de automação de testes E2E** utilizando as melhores práticas da indústria com Cypress e Cucumber para a comunidade de QA! 🧪✨

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📁 Estrutura de Diretórios](#-estrutura-de-diretórios)
- [⚡ Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [🛠️ Configuração e Instalação](#️-configuração-e-instalação)
- [🧪 Executando os Testes](#-executando-os-testes)
- [📊 Relatórios e Evidências](#-relatórios-e-evidências)
- [🔧 Configurações Avançadas](#-configurações-avançadas)
- [📚 Exemplos de Uso](#-exemplos-de-uso)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## 🎯 Sobre o Projeto

Este workshop demonstra **automação de testes E2E (End-to-End)** utilizando o framework **Cypress** com **Cucumber** para escrita de cenários em linguagem natural (Gherkin). O projeto foi desenvolvido para a aplicação [Sauce Demo](https://www.saucedemo.com/), um e-commerce de demonstração que permite praticar diversos cenários de teste.

### 🎯 Objetivos do Workshop

- ✅ **Aprender Cypress** na prática
- ✅ **Implementar BDD** com Cucumber
- ✅ **Page Object Model** para manutenibilidade
- ✅ **Padrões de automação** da indústria
- ✅ **Configuração multi-ambiente**
- ✅ **Relatórios e evidências** de execução

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Cypress** | 13.7.1 | Framework de automação E2E |
| **Cucumber** | 20.0.2 | BDD e escrita de cenários |
| **Node.js** | 18+ | Runtime JavaScript |
| **ESBuild** | 0.20.2 | Bundler para otimização |
| **XPath** | 2.0.1 | Localização avançada de elementos |

## 🏗️ Arquitetura do Projeto

```
┌─────────────────────────────────────────────────────────────┐
│                    🎭 Cypress Test Suite                   │
├─────────────────────────────────────────────────────────────┤
│  📝 Features (Gherkin)  │  🔧 Step Definitions  │  📱 Pages  │
│  • Login.feature        │  • Login.steps.js     │  • Login   │
│  • Cart.feature         │  • Cart.steps.js      │  • Cart    │
│  • Filter.feature       │  • Filter.steps.js    │  • Filter  │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Estrutura de Diretórios

```
e2e-workshop/
├── 📁 cypress/
│   ├── 📁 config/           # Configurações por ambiente
│   ├── 📁 e2e/
│   │   ├── 📁 features/     # Cenários em Gherkin
│   │   ├── 📁 step_definitions/  # Implementação dos passos
│   │   ├── 📁 pageObjects/  # Page Objects
│   │   └── 📁 elements/     # Seletores centralizados
│   ├── 📁 fixtures/         # Dados de teste
│   ├── 📁 screenshots/      # Evidências visuais
│   └── 📁 support/          # Configurações e comandos
├── 📄 cypress.config.js     # Configuração principal
├── 📄 package.json          # Dependências e scripts
└── 📄 README.md             # Este arquivo
```

## ⚡ Funcionalidades Implementadas

### 🔐 **Autenticação e Login**
- ✅ Login com usuários válidos
- ✅ Validação de credenciais inválidas
- ✅ Testes de API para autenticação
- ✅ Tratamento de erros de login

### 🛒 **Gerenciamento de Carrinho**
- ✅ Adicionar produtos ao carrinho
- ✅ Validação de quantidade
- ✅ Verificação de preços
- ✅ Processo de checkout

### 🔍 **Filtros e Busca**
- ✅ Filtros por categoria
- ✅ Ordenação de produtos
- ✅ Busca por nome
- ✅ Validação de resultados

### 📱 **Responsividade**
- ✅ Testes em diferentes viewports
- ✅ Validação mobile-first
- ✅ Cross-browser testing

## 🛠️ Configuração e Instalação

### 📋 Pré-requisitos

- **Node.js** 18+ instalado
- **npm** ou **yarn** como gerenciador de pacotes
- **Git** para clonar o repositório

### 🚀 Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/lucas-egswf/automation-test.git
cd automation-test

# 2. Instale as dependências
npm install

# 3. Verifique a instalação
npm run cypress:open
```

### ⚙️ Configuração de Ambiente

O projeto suporta múltiplos ambientes através de arquivos de configuração:

```bash
# Configuração local (padrão)
cypress/config/local.json

# Configuração de produção
cypress/config/production.json

# Configuração de staging
cypress/config/staging.json
```

## 🧪 Executando os Testes

### 🖥️ **Interface Gráfica (Recomendado para desenvolvimento)**

```bash
npm run cypress:open
```

### 🚀 **Execução em Lote (CI/CD)**

```bash
npm run cypress:run
```

### 🎯 **Executar Testes Específicos**

```bash
# Executar apenas testes de login
npx cypress run --spec "cypress/e2e/features/Login.feature"

# Executar testes de carrinho
npx cypress run --spec "cypress/e2e/features/AddItemCart.feature"
```

## 📊 Relatórios e Evidências

### 📸 **Screenshots Automáticos**
- Capturas automáticas em caso de falha
- Evidências visuais para análise
- Armazenamento organizado por feature

### 🎥 **Gravações de Vídeo**
- Gravação automática de execuções
- Análise de comportamento dos testes
- Debugging visual de falhas

### 📈 **Relatórios de Execução**
- Resumo detalhado de resultados
- Métricas de performance
- Análise de cobertura de testes

## 🔧 Configurações Avançadas

### ⚡ **Otimizações de Performance**

```javascript
// cypress.config.js
module.exports = {
  e2e: {
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 60000,
  }
}
```

### 🌐 **Configurações de Browser**

```javascript
// Suporte a múltiplos browsers
chromeWebSecurity: false,
viewportWidth: 1200,
viewportHeight: 900,
```

## 📚 Exemplos de Uso

### 📝 **Cenário em Gherkin**

```gherkin
Feature: Login do Usuário
  Como um usuário do sistema
  Quero fazer login na aplicação
  Para acessar minhas funcionalidades

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When preencho o campo "username" com "standard_user"
    And preencho o campo "password" com "secret_sauce"
    And clico no botão "Login"
    Then devo ser redirecionado para o dashboard
    And devo ver a mensagem "Products"
```

### 🔧 **Implementação do Step**

```javascript
// step_definitions/Login.steps.js
Given('que estou na página de login', () => {
  cy.visit('/');
  cy.get(loginElements.username).should('be.visible');
});

When('preencho o campo {string} com {string}', (field, value) => {
  const selector = field === 'username' ? loginElements.username : loginElements.password;
  cy.get(selector).type(value);
});
```

### 📱 **Page Object**

```javascript
// pageObjects/Login.page.js
export class LoginPage {
  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(loginElements.username).type(username);
    cy.get(loginElements.password).type(password);
    cy.get(loginElements.submit).click();
  }

  validateSuccess() {
    cy.url().should('include', '/inventory.html');
  }
}
```

## 🤝 Contribuindo

### 📋 **Como Contribuir**

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 🎯 **Áreas para Contribuição**

- ✨ Novos cenários de teste
- 🔧 Melhorias na arquitetura
- 📚 Documentação e exemplos
- 🐛 Correção de bugs
- 🚀 Otimizações de performance

### 📝 **Padrões de Código**

- Use **ESLint** para formatação
- Siga o padrão **Page Object Model**
- Escreva **cenários claros** em Gherkin
- Adicione **comentários explicativos**
- Mantenha **testes independentes**

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🌟 **Agradecimentos**

- **Cypress Team** pelo framework incrível
- **Cucumber Community** pelo BDD
- **Comunidade QA** por inspirar este workshop

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/lucas-egswf/automation-test?style=social)](https://github.com/lucas-egswf/automation-test)
[![GitHub forks](https://img.shields.io/github/forks/lucas-egswf/automation-test?style=social)](https://github.com/lucas-egswf/automation-test)
[![GitHub issues](https://img.shields.io/github/issues/lucas-egswf/automation-test)](https://github.com/lucas-egswf/automation-test/issues)

**Feito com ❤️ pela comunidade de QA**

</div>


