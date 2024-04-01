//pagesObjects/Login.page.js
import { loginElements } from "../elements/elements.js";
import { login } from "../pageObjects/commons.page.js";

const loginPage = {
  loginPage: () => {
    cy.visit(`${Cypress.config("baseUrl")}/login/index.php`);
  },

  loginValidCredentials: () => {
    cy.get(loginElements.username).click().type(Cypress.env("USERNAME"));
    cy.get(loginElements.password).type(Cypress.env("SENHA"));
    cy.get(loginElements.submitButton).click();
  },
  loginCheckLoggedIn: () => {
    cy.get(loginElements.logoutButtonMenuItemToggle).should("be.visible");
  },

  checkLoginBeforeLogout: () => {
    login.loginPage();
  },

  logout: () => {
    cy.get(loginElements.logoutButtonMenuItemToggle).click();
    cy.get(loginElements.logoutButton).click();
  },

  checkLogout: () => {
    cy.get(loginElements.checkLogout)
      .should("be.visible")
      .contains("Você acessou como visitante");
  },
};

module.exports = {loginPage };
