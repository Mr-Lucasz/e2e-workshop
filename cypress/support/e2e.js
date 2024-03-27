// Importações necessárias
import loginPage from "../e2e/pageObjects/Login.page";
import "cypress-localstorage-commands";

// Configuração do Cypress para executar os testes de forma mais rápida
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit(`${Cypress.config("baseUrl")}/login/index.php`).then(() => {
    loginPage.login();
  });
});

after() => {
  cy.clearLocalStorage();
};