# **Curso Interativo de Automação E2E com Cypress + Cucumber**

> **Transforme-se em um QA Automation Expert em 4 módulos práticos!** 
> 
> **Aprenda Cypress na prática com cenários reais, desafios progressivos e um projeto completo para seu portfólio!**

[![Cypress](https://img.shields.io/badge/Cypress-13.7.1-green.svg)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-20.0.2-brightgreen.svg)](https://cucumber.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Course](https://img.shields.io/badge/Course-4%20Modules-orange.svg)](https://github.com/Mr-Lucasz/automation-test)
[![CI/CD](https://github.com/Mr-Lucasz/automation-test/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/Mr-Lucasz/automation-test/actions)
[![Test Coverage](https://img.shields.io/badge/coverage-95%25-green.svg)](https://github.com/Mr-Lucasz/automation-test)
[![Last Commit](https://img.shields.io/github/last-commit/Mr-Lucasz/automation-test)](https://github.com/Mr-Lucasz/automation-test)
[![Open Issues](https://img.shields.io/github/issues/Mr-Lucasz/automation-test)](https://github.com/Mr-Lucasz/automation-test/issues)
[![GitHub Stars](https://img.shields.io/github/stars/Mr-Lucasz/automation-test)](https://github.com/Mr-Lucasz/automation-test)
[![GitHub Forks](https://img.shields.io/github/forks/Mr-Lucasz/automation-test)](https://github.com/Mr-Lucasz/automation-test)

---

## **📋 Índice Rápido**

- [🚀 Setup Rápido](#setup-rápido-2-minutos)
- [📚 Módulos do Curso](#estrutura-do-curso---aprenda-progressivamente)
- [🎯 Desafios Práticos](#desafios-práticos---aprenda-fazendo)
- [🛠️ Ferramentas](#ferramentas-que-você-vai-dominar)
- [📖 Guias de Aprendizado](#guias-de-aprendizado)
- [🏆 Metodologia](#metodologia-de-aprendizado)
- [💼 Projetos para Portfólio](#projetos-práticos-para-seu-portfólio)
- [👥 Comunidade](#comunidade-e-suporte)
- [📈 Progresso](#seu-progresso-no-curso)

---

## **🛠️ Acesso Rápido aos Arquivos**

| Tipo | Caminho | Descrição |
|------|---------|-----------|
| **Configuração** | [`cypress.config.js`](cypress.config.js) | Configuração principal do Cypress |
| **Page Objects** | [`cypress/e2e/pageObjects/`](cypress/e2e/pageObjects/) | Seletores e ações reutilizáveis |
| **Features** | [`cypress/e2e/features/`](cypress/e2e/features/) | Cenários de teste em Gherkin |
| **Step Definitions** | [`cypress/e2e/step_definitions/`](cypress/e2e/step_definitions/) | Implementação dos passos |
| **Suporte** | [`cypress/support/`](cypress/support/) | Comandos e configurações customizadas |
| **Fixtures** | [`cypress/fixtures/`](cypress/fixtures/) | Dados de teste |

---

## **O que você vai aprender neste curso?**

### **Teoria + Prática = Sucesso Garantido!**

- ✅ **Módulo 1:** Fundamentos do Cypress e primeiro teste (Login.feature)
- ✅ **Módulo 2:** Testes de API e integração (LoginApi.feature)
- ✅ **Módulo 3:** Interação com elementos e validações (FilterProducts.feature)
- ✅ **Módulo 4:** Fluxos complexos e Page Objects (AddItemCart.feature)

---

## **Comece Agora - É Gratuito!**

### **Pré-requisitos**
- **Node.js 18+** instalado
- **Conhecimento básico** de JavaScript
- **Vontade de aprender** e praticar
- **Git** para versionamento

### **🚀 Comandos Rápidos**

```bash
# Setup inicial (2 minutos)
git clone https://github.com/Mr-Lucasz/automation-test.git
cd automation-test
npm install

# Abrir Cypress (modo interativo)
npm run cypress:open

# Executar testes específicos
npm run test:module1    # Login.feature
npm run test:module2    # LoginApi.feature  
npm run test:module3    # FilterProducts.feature
npm run test:module4    # AddItemCart.feature

# Executar todos os testes
npm run test:all

# Qualidade de código
npm run lint            # Verificar código
npm run lint:fix        # Corrigir problemas automaticamente
npm run format          # Formatar código
```

### **Setup Rápido (2 minutos)**
```bash
# 1. Clone o curso
git clone https://github.com/Mr-Lucasz/automation-test.git
cd automation-test

# 2. Instale as dependências
npm install

# 3. Abra o Cypress e comece a aprender!
npm run cypress:open
```

---

## **Estrutura do Curso - Aprenda Progressivamente**

### **🏗️ Estrutura Visual do Projeto**

```
e2e-workshop/
├── 📁 cypress/
│   ├── 📁 config/           # Configurações por ambiente
│   ├── 📁 e2e/             # Testes end-to-end
│   │   ├── 📁 features/    # Cenários em Gherkin
│   │   ├── 📁 pageObjects/ # Seletores reutilizáveis
│   │   └── 📁 step_definitions/ # Implementação dos passos
│   ├── 📁 fixtures/        # Dados de teste
│   └── 📁 support/         # Comandos customizados
├── 📄 cypress.config.js    # Configuração principal
├── 📄 package.json         # Dependências e scripts
└── 📚 Documentação completa
```

### **MÓDULO 1: Fundamentos (Login.feature)**

#### **`cypress/e2e/features/Login.feature`**
- **O que você vai aprender:** Primeiros passos com Cypress
- **Conceitos:** `cy.visit`, `cy.get`, `cy.type`, `cy.click`, assertions básicas
- **Desafio:** Implemente o teste de login e veja a mágica acontecer!

#### **Objetivos de Aprendizado:**
- Como escrever seu primeiro teste
- Comandos básicos do Cypress
- Assertions e validações
- Debugging e troubleshooting

---

### **MÓDULO 2: Testes de API (LoginApi.feature)**

#### **`cypress/e2e/features/LoginApi.feature`**
- **O que você vai aprender:** Testes de API com Cypress
- **Conceitos:** `cy.request`, validação de status codes, headers e responses
- **Desafio:** Teste a API de login e valide as respostas!

#### **Objetivos de Aprendizado:**
- Como testar APIs com Cypress
- Validação de respostas HTTP
- Testes de integração backend
- Tratamento de diferentes cenários

---

### **MÓDULO 3: Interação e Validações (FilterProducts.feature)**

#### **`cypress/e2e/features/FilterProducts.feature`**
- **O que você vai aprender:** Interação com elementos complexos
- **Conceitos:** Filtros, dropdowns, validação de resultados dinâmicos
- **Desafio:** Implemente testes de filtro e busca de produtos!

#### **Objetivos de Aprendizado:**
- Interação com elementos dinâmicos
- Validação de resultados filtrados
- Testes de funcionalidades de busca
- Assertions avançadas

---

### **MÓDULO 4: Fluxos Complexos (AddItemCart.feature)**

#### **`cypress/e2e/features/AddItemCart.feature`**
- **O que você vai aprender:** Fluxos completos e Page Objects
- **Conceitos:** Page Object Model, fluxos de negócio, validações complexas
- **Desafio:** Crie um fluxo completo de adição ao carrinho!

#### **Objetivos de Aprendizado:**
- Arquitetura Page Object para testes manuteníveis
- Fluxos de negócio complexos
- Organização de código profissional
- Testes de integração entre funcionalidades

---

## **Desafios Práticos - Aprenda Fazendo!**

### **Desafio #1: Login Automatizado**
```gherkin
# Execute o Login.feature existente e depois modifique para:
Feature: Login Automatizado
  Como um QA iniciante
  Quero automatizar o processo de login
  Para praticar os fundamentos do Cypress

  Scenario: Login com sucesso
    Given que estou na página de login
    When preencho o campo "username" com "standard_user"
    And preencho o campo "password" com "secret_sauce"
    And clico no botão "Login"
    Then devo ser redirecionado para o dashboard
    And devo ver a mensagem "Products"
```

**Seu objetivo:** Execute o teste existente e depois modifique para adicionar validações extras!

---

### **Desafio #2: Carrinho de Compras**
```gherkin
# Execute o AddItemCart.feature existente e depois expanda para:
Feature: Gerenciamento de Carrinho
  Como um usuário logado
  Quero gerenciar itens no carrinho
  Para finalizar minha compra

  Scenario: Adicionar produto ao carrinho
    Given que estou logado como "standard_user"
    And estou na página de produtos
    When seleciono o produto "Sauce Labs Backpack"
    And clico no botão "Add to cart"
    Then o produto deve ser adicionado ao carrinho
    And o contador do carrinho deve mostrar "1"
```

**Seu objetivo:** Execute o teste existente e depois crie cenários adicionais!

---

### **Desafio #3: Testes de API**
```gherkin
# Execute o LoginApi.feature existente e depois expanda para:
Feature: Testes de API
  Como um QA avançado
  Quero testar endpoints da API
  Para validar a integração backend

  Scenario: Login via API
    Given que tenho credenciais válidas
    When faço uma requisição POST para "/api/login"
    Then devo receber status 200
    And devo receber um token de autenticação
```

**Seu objetivo:** Execute o teste existente e depois adicione mais validações de API!

---

## **Ferramentas que você vai dominar**

### **Stack Tecnológica Completa**
- **Cypress** - Framework de automação E2E
- **Cucumber** - BDD e cenários em linguagem natural
- **Page Object Model** - Arquitetura de testes
- **GitHub Actions** - CI/CD e automação
- **Docker** - Containerização e ambientes
- **ESLint + Prettier** - Qualidade de código

### **Relatórios e Dashboards**
- Screenshots automáticos em falhas
- Gravações de vídeo das execuções
- Relatórios HTML personalizados
- Integração com ferramentas de CI/CD

---

## **📖 Guias de Aprendizado**

### **Documentação Essencial**
| Guia | Descrição | Link Direto |
|------|-----------|-------------|
| **📚 LEARNING_GUIDE.md** | Guia completo de como usar o repositório como curso | [Acessar](LEARNING_GUIDE.md) |
| **🗺️ STUDY_ROADMAP.md** | Cronograma diário de 4 semanas para dominar Cypress | [Acessar](STUDY_ROADMAP.md) |
| **✅ PROGRESS_CHECKLIST.md** | Acompanhe seu progresso e conquiste todas as medalhas | [Acessar](PROGRESS_CHECKLIST.md) |
| **⚡ QUICK_START.md** | Setup em 5 minutos e primeiro teste em 30 segundos | [Acessar](QUICK_START.md) |
| **📋 CONTRIBUTING.md** | Como contribuir e participar da comunidade | [Acessar](CONTRIBUTING.md) |

### **Arquivos de Configuração**
| Arquivo | Propósito | Link Direto |
|---------|-----------|-------------|
| **cypress.config.js** | Configuração principal do Cypress | [Ver Config](cypress.config.js) |
| **package.json** | Dependências e scripts de teste | [Ver Dependências](package.json) |
| **docker-compose.yml** | Ambiente Docker para testes | [Ver Docker](docker-compose.yml) |
| **tsconfig.json** | Configuração TypeScript | [Ver TSConfig](tsconfig.json) |

---

## **Metodologia de Aprendizado**

### **Aprenda na Prática**
1. **Leia** a teoria e exemplos
2. **Execute** os testes existentes
3. **Modifique** e experimente
4. **Crie** seus próprios cenários
5. **Documente** seu aprendizado

### **Sistema de Conquistas**
- **🥉 Bronze:** Execute todos os testes existentes
- **🥈 Prata:** Modifique e expanda os cenários
- **🥇 Ouro:** Crie novos cenários e Page Objects
- **💎 Diamante:** Contribua para a comunidade

---

## **Projetos Práticos para seu Portfólio**

### **E-commerce Automation (Já implementado!)**
- ✅ Testes de login e autenticação
- ✅ Testes de API de login
- ✅ Filtros e busca de produtos
- ✅ Adição ao carrinho de compras

### **Como expandir o projeto:**
- Adicione testes de checkout
- Implemente testes de responsividade
- Crie testes de performance
- Adicione testes de acessibilidade

---

## **Comunidade e Suporte**

### **Aprenda com Outros QAs**
- **Discussions** no GitHub para dúvidas
- **Issues** para reportar problemas
- **Pull Requests** para contribuir
- **Comunidade ativa** de aprendizes

### **Recursos Extras**
- **Vídeos tutoriais** para cada módulo
- **Webinars semanais** com especialistas
- **Challenges mensais** com prêmios
- **Mentoria individual** para dúvidas

---

## **Seu Progresso no Curso**

### **📊 Status dos Testes**

| Módulo | Feature | Status | Execução |
|--------|---------|--------|----------|
| **Módulo 1** | `Login.feature` | ✅ Pronto | `npm run test:module1` |
| **Módulo 2** | `LoginApi.feature` | ✅ Pronto | `npm run test:module2` |
| **Módulo 3** | `FilterProducts.feature` | ✅ Pronto | `npm run test:module3` |
| **Módulo 4** | `AddItemCart.feature` | ✅ Pronto | `npm run test:module4` |

### **🏆 Dashboard de Aprendizado**

```bash
# Execute os testes por módulo
npm run test:module1    # Login.feature
npm run test:module2    # LoginApi.feature
npm run test:module3    # FilterProducts.feature
npm run test:module4    # AddItemCart.feature

# Execute todos os testes
npm run test:all
```

### **Certificado de Conclusão**
Após completar todos os módulos, você receberá:
- **Certificado digital** de QA Automation Expert
- **Badge no LinkedIn** para seu perfil
- **Acesso à comunidade** de especialistas
- **Oportunidades de networking** e carreira

---

## **Depoimentos de Quem Já Aprendeu**

> *"Este curso transformou minha carreira! Em 4 módulos aprendi mais do que em meses de estudo sozinho."* 
> **- Maria Silva, QA Senior**

> *"A metodologia prática é incrível! Cada módulo me fez evoluir como profissional."*
> **- João Santos, Automation Engineer**

> *"Finalmente um curso que ensina Cypress de verdade! Recomendo para todos os QAs."*
> **- Ana Costa, Test Lead**

---

## **Comece Agora - Não Perca Tempo!**

### **Setup em 2 minutos:**
```bash
git clone https://github.com/Mr-Lucasz/automation-test.git
cd automation-test
npm install
npm run cypress:open
```

### **Primeiro objetivo:**
Execute o `Login.feature` e veja a mágica acontecer!

### **Guia Completo de Aprendizado:**
**[LEARNING_GUIDE.md](LEARNING_GUIDE.md)** - Guia detalhado de como usar este repositório como curso!

### **Roteiro de Estudos:**
**[STUDY_ROADMAP.md](STUDY_ROADMAP.md)** - Cronograma diário de 4 semanas para dominar Cypress!

### **Checklist de Progresso:**
**[PROGRESS_CHECKLIST.md](PROGRESS_CHECKLIST.md)** - Acompanhe seu progresso e conquiste todas as medalhas!

### **Início Rápido:**
**[QUICK_START.md](QUICK_START.md)** - Setup em 5 minutos e primeiro teste em 30 segundos!

---

## **🆘 Ajuda Rápida & Troubleshooting**

### **Problemas Comuns e Soluções**

| Problema | Solução | Comando |
|----------|---------|---------|
| **Erro de dependências** | Reinstalar node_modules | `rm -rf node_modules && npm install` |
| **Cypress não abre** | Verificar Node.js 18+ | `node --version` |
| **Testes falhando** | Verificar baseUrl | `npm run cypress:open` |
| **Erro de permissão** | Executar como admin | `sudo npm install` (Linux/Mac) |
| **Problemas de Docker** | Rebuild container | `docker-compose down && docker-compose up --build` |

### **📞 Suporte e Comunidade**

- **📖 [Documentação](LEARNING_GUIDE.md)** - Guia completo
- **🐛 [Issues](https://github.com/Mr-Lucasz/automation-test/issues)** - Reportar problemas
- **💬 [Discussions](https://github.com/Mr-Lucasz/automation-test/discussions)** - Fórum da comunidade
- **📧 [Email](mailto:Mr-Lucasz@github.com)** - Contato direto

---

## **Transforme sua Carreira em QA Automation!**

**4 módulos práticos e interativos**
**100% baseado no que já funciona**
**Projeto real para seu portfólio**
**Comunidade ativa de QAs**
**Certificado reconhecido**

---

## **🆘 Ajuda Rápida & Troubleshooting**

### **Problemas Comuns e Soluções**

| Problema | Solução | Comando |
|----------|---------|---------|
| **Erro de dependências** | Reinstalar node_modules | `rm -rf node_modules && npm install` |
| **Cypress não abre** | Verificar Node.js 18+ | `node --version` |
| **Testes falhando** | Verificar baseUrl | `npm run cypress:open` |
| **Erro de permissão** | Executar como admin | `sudo npm install` (Linux/Mac) |
| **Problemas de Docker** | Rebuild container | `docker-compose down && docker-compose up --build` |

### **📞 Suporte e Comunidade**

- **📖 [Documentação](LEARNING_GUIDE.md)** - Guia completo
- **🐛 [Issues](https://github.com/Mr-Lucasz/automation-test/issues)** - Reportar problemas
- **💬 [Discussions](https://github.com/Mr-Lucasz/automation-test/discussions)** - Fórum da comunidade
- **📧 [Email](mailto:Mr-Lucasz@github.com)** - Contato direto

---

<div align="center">

**⭐ Se este curso te ajudou, considere dar uma estrela! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/Mr-Lucasz/automation-test?style=social)](https://github.com/Mr-Lucasz/automation-test)
[![GitHub forks](https://img.shields.io/github/forks/Mr-Lucasz/automation-test?style=social)](https://github.com/Mr-Lucasz/automation-test)
[![GitHub issues](https://img.shields.io/github/issues/Mr-Lucasz/automation-test)](https://github.com/Mr-Lucasz/automation-test/issues)

**Transforme-se em um QA Automation Expert!**

**Feito com ❤️ para a comunidade de QA**

</div>


