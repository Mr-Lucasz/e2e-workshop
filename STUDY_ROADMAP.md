# 🗺️ **Roteiro de Estudos - Curso de Automação E2E**

> **📚 Um guia passo a passo para sua jornada de aprendizado**
> 
> **Transforme-se em um QA Automation Expert seguindo este roteiro estruturado!**

---

## 🎯 **Visão Geral do Curso**

### **📊 Estatísticas do Curso**
- **Duração:** 4 semanas (28 dias)
- **Módulos:** 4 módulos progressivos
- **Horas por dia:** 1-2 horas
- **Total de horas:** 56-84 horas
- **Nível:** Iniciante → Avançado

### **🏆 Certificações ao Longo do Curso**
- **🥉 Bronze:** Fundamentos (Semana 1)
- **🥈 Prata:** APIs e Interações (Semana 2)
- **🥇 Ouro:** Fluxos Complexos (Semana 3)
- **💎 Diamante:** Especialista (Semana 4)

---

## 📅 **SEMANA 1: Fundamentos do Cypress**

### **🎯 Objetivos da Semana**
- Entender a estrutura básica do Cypress
- Aprender comandos fundamentais
- Executar seu primeiro teste automatizado
- Compreender assertions e validações

### **📚 Recursos de Estudo**
- **Feature:** `Login.feature`
- **Steps:** `Login.steps.js`
- **Page Object:** `Login.page.js`
- **Documentação:** [Cypress Docs](https://docs.cypress.io/)

### **📋 Cronograma Diário**

#### **Dia 1: Introdução ao Cypress**
- [ ] **Teoria (30 min):** O que é Cypress e por que usar
- [ ] **Setup (30 min):** Instalação e configuração do ambiente
- [ ] **Prática (30 min):** Primeira execução do Cypress
- [ ] **Desafio:** Execute `npm run cypress:open`

#### **Dia 2: Estrutura de Testes**
- [ ] **Teoria (30 min):** Estrutura de arquivos Cypress
- [ ] **Análise (30 min):** Leia e entenda `Login.feature`
- [ ] **Prática (30 min):** Execute `npm run test:module1`
- [ ] **Desafio:** Analise o código em `Login.steps.js`

#### **Dia 3: Comandos Básicos**
- [ ] **Teoria (30 min):** Comandos `cy.visit`, `cy.get`, `cy.type`
- [ ] **Prática (45 min):** Modifique o teste de login
- [ ] **Debug (15 min):** Use o modo interativo do Cypress
- [ ] **Desafio:** Adicione validação para credenciais inválidas

#### **Dia 4: Assertions e Validações**
- [ ] **Teoria (30 min):** Tipos de assertions no Cypress
- [ ] **Prática (45 min):** Implemente validações extras
- [ ] **Debug (15 min):** Troubleshooting de falhas
- [ ] **Desafio:** Crie teste de logout

#### **Dia 5: Debugging e Troubleshooting**
- [ ] **Teoria (30 min):** Ferramentas de debug do Cypress
- [ ] **Prática (45 min):** Resolva problemas nos testes
- [ ] **Análise (15 min):** Screenshots e vídeos de falha
- [ ] **Desafio:** Implemente retry logic para elementos instáveis

#### **Dia 6: Boas Práticas**
- [ ] **Teoria (30 min):** Boas práticas de automação
- [ ] **Refatoração (45 min):** Melhore a estrutura dos testes
- [ ] **Documentação (15 min):** Comente seu código
- [ ] **Desafio:** Crie comandos customizados reutilizáveis

#### **Dia 7: Revisão e Projeto**
- [ ] **Revisão (30 min):** Conceitos aprendidos na semana
- [ ] **Projeto (45 min):** Crie um teste completo de cadastro
- [ ] **Avaliação (15 min):** Teste seus conhecimentos
- [ ] **🎉 Conquista:** Medalha de Bronze conquistada!

---

## 📅 **SEMANA 2: Testes de API**

### **🎯 Objetivos da Semana**
- Compreender como testar APIs com Cypress
- Implementar testes de integração backend
- Validar diferentes tipos de respostas HTTP
- Tratar cenários de erro e timeout

### **📚 Recursos de Estudo**
- **Feature:** `LoginApi.feature`
- **Steps:** `LoginApi.steps.js`
- **Page Object:** `LoginApi.page.js`
- **Documentação:** [Cypress API Testing](https://docs.cypress.io/api/commands/request)

### **📋 Cronograma Diário**

#### **Dia 8: Introdução aos Testes de API**
- [ ] **Teoria (30 min):** Por que testar APIs?
- [ ] **Setup (30 min):** Configuração para testes de API
- [ ] **Prática (30 min):** Primeira requisição com `cy.request`
- [ ] **Desafio:** Execute `npm run test:module2`

#### **Dia 9: Comando cy.request**
- [ ] **Teoria (30 min):** Sintaxe e parâmetros do `cy.request`
- [ ] **Prática (45 min):** Diferentes métodos HTTP (GET, POST)
- [ ] **Debug (15 min):** Logs e debugging de requisições
- [ ] **Desafio:** Teste endpoints GET e POST

#### **Dia 10: Validação de Respostas**
- [ ] **Teoria (30 min):** Validação de status codes e headers
- [ ] **Prática (45 min):** Assertions em respostas de API
- [ ] **Debug (15 min):** Tratamento de diferentes formatos
- [ ] **Desafio:** Valide estrutura JSON das respostas

#### **Dia 11: Testes de Erro**
- [ ] **Teoria (30 min):** Cenários de erro em APIs
- [ ] **Prática (45 min):** Teste status codes 400, 401, 500
- [ ] **Debug (15 min):** Tratamento de timeouts
- [ ] **Desafio:** Implemente testes para todos os cenários de erro

#### **Dia 12: Autenticação e Headers**
- [ ] **Teoria (30 min):** Autenticação em APIs
- [ ] **Prática (45 min):** Implemente testes com tokens
- [ ] **Debug (15 min):** Headers personalizados
- [ ] **Desafio:** Crie testes para diferentes tipos de autenticação

#### **Dia 13: Testes de Performance**
- [ ] **Teoria (30 min):** Métricas de performance em APIs
- [ ] **Prática (45 min):** Validação de response time
- [ ] **Debug (15 min):** Análise de performance
- [ ] **Desafio:** Implemente testes de timeout e performance

#### **Dia 14: Revisão e Projeto**
- [ ] **Revisão (30 min):** Conceitos de API testing
- [ ] **Projeto (45 min):** Crie suite completa de testes de API
- [ ] **Avaliação (15 min):** Teste seus conhecimentos
- [ ] **🎉 Conquista:** Medalha de Prata conquistada!

---

## 📅 **SEMANA 3: Interação e Validações**

### **🎯 Objetivos da Semana**
- Interagir com elementos dinâmicos
- Implementar testes de funcionalidades complexas
- Validar resultados de operações de busca
- Praticar assertions avançadas

### **📚 Recursos de Estudo**
- **Feature:** `FilterProducts.feature`
- **Steps:** `FilterProducts.steps.js`
- **Page Object:** `FilterProducts.page.js`
- **Documentação:** [Cypress Interactions](https://docs.cypress.io/guides/core-concepts/interacting-with-elements)

### **📋 Cronograma Diário**

#### **Dia 15: Elementos Dinâmicos**
- [ ] **Teoria (30 min):** Tipos de elementos dinâmicos
- [ ] **Setup (30 min):** Configuração para testes de interação
- [ ] **Prática (30 min):** Execute `npm run test:module3`
- [ ] **Desafio:** Analise como os filtros funcionam

#### **Dia 16: Dropdowns e Seletores**
- [ ] **Teoria (30 min):** Trabalhando com dropdowns
- [ ] **Prática (45 min):** Implemente testes para todos os filtros
- [ ] **Debug (15 min):** Seletores CSS e XPath
- [ ] **Desafio:** Crie testes para ordenação de preços

#### **Dia 17: Validação de Resultados**
- [ ] **Teoria (30 min):** Assertions para elementos dinâmicos
- [ ] **Prática (45 min):** Valide resultados filtrados
- [ ] **Debug (15 min):** Contagem e validação de elementos
- [ ] **Desafio:** Implemente validação de quantidade de produtos

#### **Dia 18: Testes de Busca**
- [ ] **Teoria (30 min):** Funcionalidades de busca
- [ ] **Prática (45 min):** Teste busca por nome de produto
- [ ] **Debug (15 min):** Tratamento de resultados vazios
- [ ] **Desafio:** Crie testes para busca com filtros

#### **Dia 19: Responsividade e Cross-browser**
- [ ] **Teoria (30 min):** Testes em diferentes viewports
- [ ] **Prática (45 min):** Teste em mobile e desktop
- [ ] **Debug (15 min):** Adaptação para diferentes resoluções
- [ ] **Desafio:** Implemente testes responsivos

#### **Dia 20: Edge Cases e Cenários Complexos**
- [ ] **Teoria (30 min):** Identificação de edge cases
- [ ] **Prática (45 min):** Teste cenários extremos
- [ ] **Debug (15 min):** Tratamento de falhas inesperadas
- [ ] **Desafio:** Crie testes para cenários de erro

#### **Dia 21: Revisão e Projeto**
- [ ] **Revisão (30 min):** Conceitos de interação e validação
- [ ] **Projeto (45 min):** Suite completa de testes de filtros
- [ ] **Avaliação (15 min):** Teste seus conhecimentos
- [ ] **🎉 Conquista:** Medalha de Prata avançada conquistada!

---

## 📅 **SEMANA 4: Fluxos Complexos e Page Objects**

### **🎯 Objetivos da Semana**
- Compreender Page Object Model
- Implementar fluxos de negócio complexos
- Organizar código de forma profissional
- Integrar diferentes funcionalidades

### **📚 Recursos de Estudo**
- **Feature:** `AddItemCart.feature`
- **Steps:** `AddCart.steps.js`
- **Page Object:** `AddCart.page.js`
- **Documentação:** [Page Object Model](https://docs.cypress.io/guides/redux)

### **📋 Cronograma Diário**

#### **Dia 22: Introdução ao Page Object Model**
- [ ] **Teoria (30 min):** O que é POM e por que usar
- [ ] **Setup (30 min):** Estrutura de Page Objects
- [ ] **Prática (30 min):** Execute `npm run test:module4`
- [ ] **Desafio:** Analise a estrutura dos Page Objects existentes

#### **Dia 23: Arquitetura de Page Objects**
- [ ] **Teoria (30 min):** Organização e estrutura de POM
- [ ] **Prática (45 min):** Refatore Page Objects existentes
- [ ] **Debug (15 min):** Melhore a manutenibilidade
- [ ] **Desafio:** Crie novos Page Objects para outras páginas

#### **Dia 24: Fluxos de Negócio**
- [ ] **Teoria (30 min):** Como implementar fluxos complexos
- [ ] **Prática (45 min):** Expanda o fluxo de carrinho
- [ ] **Debug (15 min):** Tratamento de estados intermediários
- [ ] **Desafio:** Implemente fluxo completo de checkout

#### **Dia 25: Integração entre Funcionalidades**
- [ ] **Teoria (30 min):** Testes de integração E2E
- [ ] **Prática (45 min):** Teste fluxo login → produtos → carrinho
- [ ] **Debug (15 min):** Gerenciamento de estado entre testes
- [ ] **Desafio:** Crie teste de fluxo completo de compra

#### **Dia 26: Organização e Manutenibilidade**
- [ ] **Teoria (30 min):** Boas práticas de organização
- [ ] **Prática (45 min):** Refatore e organize todo o código
- [ ] **Debug (15 min):** Implemente padrões de nomenclatura
- [ ] **Desafio:** Crie documentação para seus Page Objects

#### **Dia 27: Testes de Regressão**
- [ ] **Teoria (30 min):** O que são testes de regressão
- [ ] **Prática (45 min):** Implemente suite de regressão
- [ ] **Debug (15 min):** Análise de resultados
- [ ] **Desafio:** Configure execução automática de regressão

#### **Dia 28: Projeto Final e Certificação**
- [ ] **Revisão (30 min):** Todo o conteúdo do curso
- [ ] **Projeto Final (45 min):** Aplicação completa de e-commerce
- [ ] **Avaliação (15 min):** Teste final de conhecimentos
- [ ] **🎉 Conquista:** Medalha de Ouro e certificação conquistadas!

---

## 🎯 **Sistema de Avaliação**

### **📊 Critérios de Conquista**

#### **🥉 Bronze (Semana 1)**
- [ ] Execute todos os testes do Módulo 1
- [ ] Compreenda comandos básicos do Cypress
- [ ] Implemente validações extras nos testes
- **Pontuação mínima:** 70%

#### **🥈 Prata (Semana 2-3)**
- [ ] Execute todos os testes dos Módulos 2 e 3
- [ ] Implemente testes adicionais para APIs
- [ ] Crie cenários para todos os filtros
- **Pontuação mínima:** 80%

#### **🥇 Ouro (Semana 4)**
- [ ] Execute todos os testes do Módulo 4
- [ ] Compreenda e implemente Page Object Model
- [ ] Crie fluxos complexos de negócio
- **Pontuação mínima:** 85%

#### **💎 Diamante (Especialista)**
- [ ] Todos os testes passando
- [ ] Crie novas features completas
- [ ] Contribua para a comunidade
- **Pontuação mínima:** 95%

---

## 🛠️ **Ferramentas de Apoio**

### **📚 Recursos Adicionais**
- **Vídeos:** Tutoriais em vídeo para cada módulo
- **Webinars:** Sessões semanais com especialistas
- **Challenges:** Desafios mensais com prêmios
- **Mentoria:** Suporte individual para dúvidas

### **🔍 Comandos de Progresso**
```bash
# Verifique seu progresso
npm run test:module1    # Módulo 1 - Fundamentos
npm run test:module2    # Módulo 2 - APIs
npm run test:module3    # Módulo 3 - Interações
npm run test:module4    # Módulo 4 - Fluxos Complexos
npm run test:all        # Todos os módulos

# Modo interativo para desenvolvimento
npm run cypress:open
```

---

## 🌟 **Dicas para Sucesso**

### **💡 Estratégias de Aprendizado**
1. **Pratique diariamente** - Mesmo que seja apenas 30 minutos
2. **Experimente e erre** - Aprenda com seus erros
3. **Documente seu progresso** - Mantenha um log de aprendizado
4. **Participe da comunidade** - Compartilhe e aprenda com outros
5. **Construa projetos pessoais** - Aplique o conhecimento em projetos reais

### **🚀 Como Manter a Motivação**
- **Defina metas pequenas** - Celebre cada conquista
- **Visualize seu progresso** - Use o sistema de medalhas
- **Conecte-se com outros aprendizes** - Forme grupos de estudo
- **Recompense-se** - Dê-se pequenas recompensas por marcos atingidos

---

## 🎉 **Parabéns por Começar Esta Jornada!**

**🎓 Você está no caminho para se tornar um QA Automation Expert!**

**💻 Aprenda fazendo, experimente, erre e aprenda mais!**

**🚀 A comunidade está aqui para te apoiar!**

---

<div align="center">

**🌟 Transforme sua carreira com automação! 🌟**

**Feito com ❤️ para a comunidade de QA**

</div>
