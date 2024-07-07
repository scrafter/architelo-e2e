const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4173',
    env: {
      backendUrl: 'http://localhost:3001'
    },
    options: {
      browser: "chrome"
    }
  },
});
