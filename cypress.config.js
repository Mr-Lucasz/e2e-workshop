const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs-extra');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@bahmutov/cypress-esbuild-preprocessor/esbuildPlugin').default;

function getConfigurationByFile(file) {
  return fs.readJson(path.resolve("cypress", "config", `${file}.json`));
}

async function setupNodeEvents(on, config) {
  const file = config.env.configFile || "local";
  const envConfig = await getConfigurationByFile(file);

  config.baseUrl = envConfig.baseUrl;
  config.env = { ...config.env, ...envConfig };

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)],
  }));

  return config;
}

// Configurando o Cypress
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    supportFile: 'cypress/support/e2e.js',
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 60000,
    viewportWidth: 1200,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
  },
  experimentalMemoryManagement: true,
});
