//pagesObjects/Login.page.js
import { loginElements } from "../elements/loginElements";

const loginPage = {
  login: () => {

    if(Cypress.config("secondUrl") && cy.get(loginElements.visitante).contains("Você acessou como visitante")){
      cy.visit(`${Cypress.config("baseUrl")}/login/index.php`);
      cy.get(loginElements.username).type(`${Cypress.env("USERNAME")}`);
      cy.get(loginElements.password).type(`${Cypress.env("SENHA")}`);
      cy.get(loginElements.submitButton).click();
    }
    cy.get(loginElements.logoutButtonMenuItemToggle).should("be.visible");
  },

  logout: () => {
    cy.get(loginElements.logoutButtonMenuItemToggle).click();
    cy.get(loginElements.logoutButton).click();
  },
};

module.exports = loginPage;
