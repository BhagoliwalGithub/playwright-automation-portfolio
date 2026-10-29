
// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({

  // Test files ka folder
  testDir: './tests',

  // Maximum time allowed for one test
  timeout: 40 * 1000,

  // Maximum time for expect() assertions
  expect: {
    timeout: 5000,
  },

  // HTML report generate karega
  reporter: 'html',

  use: {
    // Browser configuration
    browserName: 'chromium',
    headless: false,

    // Failed tests ke liye screenshot save hoga
    screenshot: 'on',

    // Failed tests ke liye video retain hoga
    video: 'on',

    // Failed tests ke liye trace save hoga
    trace: 'on',
  },
});

export default config;
