// Test Environment Config
// In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

// Examples:
// Input:
// envName = "staging"
// Output:
// Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
// 💡 Explanation:The switch matches "staging" and sets the corresponding configuration values for the staging environment.


// Input Environment
let envName = "staging";

// Fixed environment configurations (const)
const config = {
  dev: {
    baseUrl: "https://dev-api.testingacademy.com",
    apiKey: "dev_key_xxxx-xxxx",
    timeout: 5000,
    description: "Development - Local testing"
  },
  staging: {
    baseUrl: "https://staging-api.testingacademy.com",
    apiKey: "stg_key_xxxx-xxxx",
    timeout: 8000,
    description: "Staging - Pre-production mirror"
  },
  qa: {
    baseUrl: "https://qa-api.testingacademy.com",
    apiKey: "qa_key_xxxx-xxxx",
    timeout: 7000,
    description: "QA - Testing validation environment"
  },
  prod: {
    baseUrl: "https://api.testingacademy.com",
    apiKey: "prod_key_xxxx-xxxx",
    timeout: 12000,
    description: "Production - Live environment"
  },
  production: {
    baseUrl: "https://api.testingacademy.com",
    apiKey: "prod_key_xxxx-xxxx",
    timeout: 12000,
    description: "Production - Live environment"
  }
};

// Selected configuration
let selectedConfig;

switch (envName.toLowerCase()) {
  case "dev":
  case "development":
    selectedConfig = config.dev;
    break;

  case "staging":
    selectedConfig = config.staging;
    break;

  case "qa":
    selectedConfig = config.qa;
    break;

  case "prod":
  case "production":
    selectedConfig = config.prod;
    break;

  default:
    selectedConfig = {
      baseUrl: "N/A",
      apiKey: "N/A",
      timeout: "N/A",
      description: "Unknown Environment"
    };
}

// Output
console.log(
  `Environment: ${envName.toUpperCase()}
Base URL: ${selectedConfig.baseUrl}
API Key: ${selectedConfig.apiKey}
Timeout: ${selectedConfig.timeout}ms
Description: ${selectedConfig.description}`
);