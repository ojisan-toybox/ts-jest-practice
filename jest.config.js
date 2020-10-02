// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "babel",
  // A preset that is used as a base for Jest's configuration
  preset: undefined,
  // The test environment that will be used for testing
  testEnvironment: "node",
  // A map from regular expressions to paths to transformers
  transform: {
    ".ts": "ts-jest",
  },
};
