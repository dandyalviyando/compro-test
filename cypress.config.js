module.exports = {
  e2e: {
    baseUrl: 'https://morinaga.id', // Base URL for the application
    specPattern: 'cypress/e2e/**/*.cy.js', // Test spec location
    supportFile: 'cypress/support/e2e.js', // Support file for custom commands or setup
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Enable video recording for test runs
    screenshotsFolder: 'cypress/screenshots', // Folder for screenshots on test failures
    videosFolder: 'cypress/videos', // Folder for videos of test runs
    retries: {
      runMode: 2, // Retry 2 times if tests fail
      openMode: 0, // No retries for opened tests in interactive mode
    },
  },
};
