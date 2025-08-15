module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['cypress'],
  rules: {
    // Regras personalizadas
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Regras específicas do Cypress
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
  },
  overrides: [
    {
      files: ['cypress/**/*.js'],
      rules: {
        'no-console': 'off', // Permitir console.log nos testes
      },
    },
  ],
};
