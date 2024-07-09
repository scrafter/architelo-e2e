const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      mainFrontendUrl: 'https://lab.architelo.com',
      panelFrontendUrl: 'https://panel.lab.architelo.com',
      apiUrl: 'https://api.lab.architelo.com',
    }
  },
});
