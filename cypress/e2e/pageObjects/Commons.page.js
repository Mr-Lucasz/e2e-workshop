import { loginElements } from "../elements/elements.js";

commonPage = {
  login: () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.get(loginElements.usernameInput).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.passwordInput).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
  },

  loginApi: () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.get(loginElements.username).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.password).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
  },
};

module.exports = { commonPage };
