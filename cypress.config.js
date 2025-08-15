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

  // Configuração para relatórios e métricas
  on('after:run', async (results) => {
    if (results) {
      // Salvar resultados para análise
      await fs.writeJson('cypress/results/run-results.json', results);
      
      // Calcular métricas de coverage
      const totalTests = results.totalTests || 0;
      const passedTests = results.totalPassed || 0;
      const failedTests = results.totalFailed || 0;
      const skippedTests = results.totalSkipped || 0;
      
      const coverage = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;
      
      console.log(`\n📊 Test Results Summary:`);
      console.log(`✅ Passed: ${passedTests}`);
      console.log(`❌ Failed: ${failedTests}`);
      console.log(`⏭️ Skipped: ${skippedTests}`);
      console.log(`📈 Coverage: ${coverage}%`);
      
      // Salvar métricas para badges
      await fs.writeJson('cypress/results/metrics.json', {
        totalTests,
        passedTests,
        failedTests,
        skippedTests,
        coverage,
        timestamp: new Date().toISOString()
      });
    }
  });

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
    // Configurações para relatórios
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome, spec',
      mochawesomeReporterOptions: {
        charts: true,
        reportPageTitle: 'Cypress Test Results',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
      },
    },
  },
  experimentalMemoryManagement: true,
});
