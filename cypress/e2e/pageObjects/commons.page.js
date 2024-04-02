import { loginElements } from "../elements/elements.js";

const commonPage = {
  loginPage: () => {
    cy.visit(`${Cypress.config("baseUrl")}/login/index.php`);
    cy.get(loginElements.username).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.password).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
    //esperar carregar a home, await?
    cy.get(loginElements.logoutButtonMenuItemToggle).should("be.visible");
  },

  logoutPage: () => {
    cy.get(loginElements.logoutButtonMenuItemToggle).click();
    cy.get(loginElements.logoutButton).click();
    cy.get(loginElements.checkLogout)
    .should("be.visible")
    .contains("Você acessou como visitante");
  },
};

module.exports = {commonPage};
