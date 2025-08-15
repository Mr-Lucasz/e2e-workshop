// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Configurações globais do Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que o Cypress falhe em erros não capturados
  // Útil para aplicações que podem ter erros de JavaScript não críticos
  return false
})

// Configuração de timeouts globais
Cypress.config('defaultCommandTimeout', 10000)
Cypress.config('requestTimeout', 10000)
Cypress.config('responseTimeout', 10000)

// Configuração de viewport padrão
Cypress.config('viewportWidth', 1280)
Cypress.config('viewportHeight', 720)

// Log personalizado para debugging
Cypress.Commands.add('log', (message) => {
  cy.task('log', `[${new Date().toISOString()}] ${message}`)
})

// Comando para aguardar carregamento da página
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.window().its('document').its('readyState').should('eq', 'complete')
})

// Comando para verificar se não há erros no console
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    const consoleErrors = win.console.error
    if (consoleErrors && consoleErrors.called) {
      throw new Error('Console errors detected during test execution')
    }
  })
})
