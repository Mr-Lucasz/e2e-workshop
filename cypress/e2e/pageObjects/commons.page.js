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
};

module.exports = {commonPage};
