
import { loginElements } from "../elements/elements.js";

commonPage = {

    login: () => {
        cy.visit(`${Cypress.config("baseUrl")}`);
        cy.get(loginElements.username).click().type(Cypress.env("USERNAME"));
        cy.get(loginElements.password).type(Cypress.env("SENHA"));
        cy.get(loginElements.submitButton).click();
    }
};


module.exports = { commonPage };