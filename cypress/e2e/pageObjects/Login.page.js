import { loginElements } from "../elements/elements.js";

loginPage = {


    acessaLogin: () => {
        cy.visit(`${Cypress.config("baseUrl")}`);
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
        cy.get(loginElements.checkLoginPage).should("be.visible").contains("Swag Labs");
    },
};

module.exports = { loginPage };
