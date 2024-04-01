// Importando os pacotes necessários
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

async function setupNodeEvents(on, config){

  const file = config.env.configFile || "local";
  const envConfig = await getConfigurationByFile(file)

  config.baseUrl = envConfig.baseUrl;
  //o arquivo de configuração seja acessível em qualquer lugar do código
  config.env = Object.assign(config.env, envConfig);
  
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Definindo o preprocessor para usar o esbuild
  on(
      "file:preprocessor",
      createBundler({
          plugins: [createEsbuildPlugin.default(config)],
      })
  );

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
    supportFile: false,
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 60000,
    viewportWidth: 1200,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,

    },
    experimentalMemoryManagement: true
  });