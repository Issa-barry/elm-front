import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
