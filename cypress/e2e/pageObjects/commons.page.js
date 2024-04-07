import { loginElements } from "../elements/elements.js";

const commonPage = {
  loginPage: () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.get(loginElements.usernameInput).should("be.visible").click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.passwordInput).should("be.visible").type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).should("be.visible").click();
  },

  logoutPage: () => {

    cy.get(loginElements.openMenu).click();
    cy.get(loginElements.navbar).should("be.visible");
    cy.get(loginElements.logoutButton).click();
    cy.get(loginElements.checkLoginPage).should("be.visible").contains("Swag Labs");

    
  },
};

module.exports = {commonPage};
