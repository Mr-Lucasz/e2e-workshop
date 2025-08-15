// cypress/support/commands.js

// Comando personalizado para login
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/');
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// Comando personalizado para logout
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});

// Comando para aguardar carregamento da página
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.window().its('document').its('readyState').should('eq', 'complete');
});

// Comando para verificar se não há erros no console
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    const consoleErrors = win.console.error;
    if (consoleErrors && consoleErrors.called) {
      throw new Error('Console errors detected during test execution');
    }
  });
});

// Comando para login via API
Cypress.Commands.add('loginViaAPI', (username = 'standard_user', password = 'secret_sauce') => {
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: { username, password }
  }).then((response) => {
    expect(response.status).to.eq(200);
    // Armazena o token se necessário
    if (response.body.token) {
      Cypress.env('authToken', response.body.token);
    }
  });
});