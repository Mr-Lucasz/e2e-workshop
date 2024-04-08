import { loginElements } from "../elements/elements.js";

loginPage = {
  acessaLogin: () => {
    cy.visit(Cypress.env("BASE_URL"));  
    cy.get(loginElements.usernameInput).should("be.visible");
    cy.get(loginElements.passwordInput).should("be.visible");
    cy.get(loginElements.submitButton).should("be.visible");
  },

  insereCredenciaisValidas: () => {
    cy.get(loginElements.usernameInput).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.passwordInput).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
  },

  redirecionaHome: () => {
    cy.get(loginElements.header).should("be.visible").contains("Products");
    cy.get(loginElements.cartContainer).should("be.visible");
    cy.get(loginElements.openMenu).should("be.visible");
    cy.get(loginElements.title).should("be.visible").contains("Products");
  },

  //logout

  logout: () => {
    cy.get(loginElements.openMenu).click();
    cy.get(loginElements.navbar).should("be.visible");
    cy.get(loginElements.logoutButton).click();
    cy.get(loginElements.checkLoginPage)
      .should("be.visible")
      .contains("Swag Labs");
  },

  insereSenhaIncorreta: () => {
    cy.get(loginElements.usernameInput).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.passwordInput).type("senhaerrada");
    cy.get(loginElements.submitButton).click();
    cy.get(loginElements.checkLoginPage)
      .should("be.visible")
      .contains("Swag Labs");
  },

  checkMensagemErro: (msgError) => {
    cy.get(loginElements.msgError).should("be.visible").contains(msgError);
  },

  insereFieldUserEmpty: () => {
    cy.get(loginElements.passwordInput).click().type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
    cy.get(loginElements.checkLoginPage)
      .should("be.visible")
      .contains("Swag Labs");
  },

  checkMensagemErroUserEmpty: (msgError) => {
    cy.get(loginElements.msgError).should("be.visible").contains(msgError);
  },

  insereFieldPasswordEmpty: () => {
    cy.get(loginElements.usernameInput).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.submitButton).click();
    cy.get(loginElements.checkLoginPage)
      .should("be.visible")
      .contains("Swag Labs");
  },

  checkMensagemErroPasswordEmpty: (msgError) => {
    cy.get(loginElements.msgError).should("be.visible").contains(msgError);
  },
};

module.exports = { loginPage };
