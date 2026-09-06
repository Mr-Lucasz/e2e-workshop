# **Guia de Aprendizado - Curso de Automação E2E**

> **Aprenda Cypress progressivamente usando o que já existe!**
>
> **Este guia mostra como transformar as features existentes em um curso completo de automação.**

---

## **Como Usar Este Repositório como Curso**

### **Estrutura de Aprendizado**

Este repositório foi organizado como um **curso progressivo** onde você aprende Cypress usando as features existentes. Cada feature representa um módulo de aprendizado com objetivos específicos.

---

## **MÓDULO 1: Fundamentos do Cypress**

### **Feature: `Login.feature`**

#### **Objetivos de Aprendizado:**

- Entender a estrutura básica de um teste Cypress
- Aprender comandos fundamentais (`cy.visit`, `cy.get`, `cy.type`, `cy.click`)
- Compreender assertions e validações básicas
- Praticar debugging e troubleshooting

#### **Como Estudar:**

1. **Leia** o arquivo `Login.feature` e entenda a estrutura Gherkin
2. **Execute** o teste: `npm run test:module1`
3. **Analise** o código em `cypress/e2e/step_definitions/Login.steps.js`
4. **Modifique** o teste para adicionar validações extras
5. **Experimente** com diferentes cenários

#### **Conceitos-Chave:**

```javascript
// Comandos básicos que você vai aprender
cy.visit('/'); // Navegar para uma página
cy.get('#username'); // Localizar elementos
cy.type('standard_user'); // Preencher campos
cy.click(); // Clicar em elementos
cy.should('be.visible'); // Assertions básicas
```

#### **Desafio Extra:**

- Adicione validação para credenciais inválidas
- Implemente teste de logout
- Adicione validação de mensagens de erro

---

## **MÓDULO 2: Testes de API**

### **Feature: `LoginApi.feature`**

#### **Objetivos de Aprendizado:**

- Compreender como testar APIs com Cypress
- Aprender comandos de requisição HTTP (`cy.request`)
- Validar status codes, headers e responses
- Implementar testes de integração backend

#### **Como Estudar:**

1. **Leia** o arquivo `LoginApi.feature`
2. **Execute** o teste: `npm run test:module2`
3. **Analise** o código em `cypress/e2e/step_definitions/LoginApi.steps.js`
4. **Experimente** com diferentes endpoints
5. **Crie** testes para outros cenários de API

#### **Conceitos-Chave:**

```javascript
// Testes de API que você vai aprender
cy.request({
  method: 'POST',
  url: '/api/login',
  body: { username: 'user', password: 'pass' },
}).then(response => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('token');
});
```

#### **Desafio Extra:**

- Teste diferentes métodos HTTP (GET, PUT, DELETE)
- Valide headers de resposta
- Implemente testes de erro (400, 401, 500)
- Teste timeouts e cenários de falha

---

## **MÓDULO 3: Interação e Validações**

### **Feature: `FilterProducts.feature`**

#### **Objetivos de Aprendizado:**

- Interagir com elementos dinâmicos (dropdowns, filtros)
- Validar resultados de operações de busca
- Implementar testes de funcionalidades complexas
- Praticar assertions avançadas

#### **Como Estudar:**

1. **Leia** o arquivo `FilterProducts.feature`
2. **Execute** o teste: `npm run test:module3`
3. **Analise** o código em `cypress/e2e/step_definitions/FilterProducts.steps.js`
4. **Experimente** com diferentes filtros e buscas
5. **Crie** cenários para edge cases

#### **Conceitos-Chave:**

```javascript
// Interações avançadas que você vai aprender
cy.get('select').select('Price (low to high)'); // Dropdowns
cy.get('.product').should('have.length', 6); // Contagem de elementos
cy.get('[data-test="filter"]').click(); // Filtros
cy.contains('Sauce Labs Backpack').should('be.visible'); // Busca por texto
```

#### **Desafio Extra:**

- Implemente testes para todos os tipos de filtro
- Adicione validação de ordenação
- Teste busca por nome de produto
- Implemente testes de responsividade

---

## **MÓDULO 4: Fluxos Complexos e Page Objects**

### **Feature: `AddItemCart.feature`**

#### **Objetivos de Aprendizado:**

- Compreender Page Object Model
- Implementar fluxos de negócio complexos
- Organizar código de forma profissional
- Integrar diferentes funcionalidades

#### **Como Estudar:**

1. **Leia** o arquivo `AddItemCart.feature`
2. **Execute** o teste: `npm run test:module4`
3. **Analise** o código em `cypress/e2e/pageObjects/AddCart.page.js`
4. **Entenda** como Page Objects são organizados
5. **Expanda** o fluxo para checkout completo

#### **Conceitos-Chave:**

```javascript
// Page Object Model que você vai aprender
export class ProductPage {
  addToCart(productName) {
    cy.get(`[data-test="add-to-cart-${productName}"]`).click();
    return this;
  }

  validateCartCount(expectedCount) {
    cy.get('.shopping_cart_badge').should('contain', expectedCount);
    return this;
  }
}
```

#### **Desafio Extra:**

- Implemente fluxo completo de checkout
- Adicione validação de preços e totais
- Crie testes para remoção de itens
- Implemente testes de carrinho vazio

---

## **Metodologia de Aprendizado Recomendada**

### **Passo a Passo:**

#### **Semana 1: Fundamentos**

- **Dia 1-2:** Execute e analise `Login.feature`
- **Dia 3-4:** Modifique e expanda os testes
- **Dia 5-7:** Pratique comandos básicos

#### **Semana 2: APIs**

- **Dia 1-2:** Execute e analise `LoginApi.feature`
- **Dia 3-4:** Crie testes para outros endpoints
- **Dia 5-7:** Implemente validações avançadas

#### **Semana 3: Interações**

- **Dia 1-2:** Execute e analise `FilterProducts.feature`
- **Dia 3-4:** Implemente todos os tipos de filtro
- **Dia 5-7:** Crie testes de busca e ordenação

#### **Semana 4: Fluxos Complexos**

- **Dia 1-2:** Execute e analise `AddItemCart.feature`
- **Dia 3-4:** Implemente Page Objects adicionais
- **Dia 5-7:** Crie fluxo completo de e-commerce

---

## **Ferramentas de Apoio**

### **Comandos de Progresso:**

```bash
# Execute módulos individualmente
npm run test:module1    # Fundamentos
npm run test:module2    # APIs
npm run test:module3    # Interações
npm run test:module4    # Fluxos Complexos

# Execute todos os testes
npm run test:all
```

### **Debugging e Desenvolvimento:**

```bash
# Limpar cache se necessário
npx cypress cache clear

# Executar com debug
npx cypress run --spec "cypress/e2e/features/Login.feature" --headed

# Ver logs detalhados
DEBUG=cypress:* npm run test:module1
```

---

## **Sistema de Conquistas**

### **🥉 Bronze - Fundamentos**

- [ ] Execute `Login.feature` com sucesso
- [ ] Entenda todos os comandos básicos
- [ ] Modifique o teste para adicionar validações

### **🥈 Prata - APIs e Interações**

- [ ] Execute `LoginApi.feature` com sucesso
- [ ] Execute `FilterProducts.feature` com sucesso
- [ ] Crie testes adicionais para APIs
- [ ] Implemente filtros adicionais

### **🥇 Ouro - Fluxos Complexos**

- [ ] Execute `AddItemCart.feature` com sucesso
- [ ] Compreenda Page Object Model
- [ ] Crie novos Page Objects
- [ ] Implemente fluxo de checkout

### **💎 Diamante - Especialista**

- [ ] Todos os testes passando
- [ ] Crie novas features completas
- [ ] Contribua para a comunidade
- [ ] Ajude outros aprendizes

---

## **Próximos Passos Após o Curso**

### **Expanda o Projeto:**

- Adicione testes de responsividade
- Implemente testes de performance
- Crie testes de acessibilidade
- Adicione testes de regressão visual

### **Tecnologias Avançadas:**

- TypeScript para type safety
- Testes de performance com Lighthouse
- Integração com ferramentas de CI/CD
- Relatórios HTML personalizados

### **Contribua para a Comunidade:**

- Compartilhe seus aprendizados
- Ajude outros QAs iniciantes
- Participe de eventos e meetups
- Crie conteúdo educacional

---

## **Suporte e Ajuda**

### **Quando Pedir Ajuda:**

- Após tentar resolver o problema por 30 minutos
- Quando o erro não for claro
- Para entender conceitos específicos
- Para validação de sua solução

### **Como Pedir Ajuda:**

1. **Descreva** o problema claramente
2. **Inclua** logs de erro
3. **Mencione** o que você já tentou
4. **Especifique** o módulo que está estudando

### **Recursos Adicionais:**

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Cucumber BDD Guide](https://cucumber.io/docs/bdd/)
- [GitHub Discussions](https://github.com/Mr-Lucasz/automation-test/discussions)
- [Issues para bugs](https://github.com/Mr-Lucasz/automation-test/issues)

---

## **Parabéns pelo Início da Jornada!**

**Você está no caminho para se tornar um QA Automation Expert!**

**Aprenda fazendo, experimente, erre e aprenda mais!**

**A comunidade está aqui para te apoiar!**

---

<div align="center">

**Transforme sua carreira com automação!**

**Feito com ❤️ para a comunidade de QA**

</div>
