// cypress/support/commands.js

Cypress.Commands.add('login', () => {
    cy.visit(`${Cypress.config("baseUrl")}/login/index.php`);
    cy.get(loginElements.username).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.password).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get(loginElements.logoutButtonMenuItemToggle).click();
    cy.get(loginElements.logoutButton).click();
  });
  
  beforeEach(() => {
    cy.login();
  });
  
  after(() => {
    cy.logout();
  });