// Importações necessárias
import { loginElements } from '../elements/loginElements';

const loginPage = {
    login: () => {
        cy.get(loginElements.username).type('01295230208');
        cy.get(loginElements.password).type('Jesu$.33');
        cy.get(loginElements.submitButton).click();
    },

    logout: () => {
        cy.get(loginElements.logoutButtonMenuItemToggle).click();
        cy.get(loginElements.logoutButton).click(); // Corrigido o nome do seletor
    }
};

export default loginPage;