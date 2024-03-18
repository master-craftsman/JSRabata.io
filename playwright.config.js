// @ts-check
import path from 'path';

const {defineConfig, devices} = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export const STORAGE_STATE = path.join(__dirname, './auth/st_pk_asp_mitsu.json');

module.exports = defineConfig({
    timeout: 360000,
    expect: {
        timeout: 360000,
        toMatchSnapshot: {
            maxDiffPixels: 10,
        },
    },
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'allure-playwright',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        // Capture screenshot after each test failure.
        screenshot: 'only-on-failure',
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://rabata.io',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        // {
        //     name: 'setup',
        //     testMatch: '**/*.setup.js',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //         viewport: {width: 1792, height: 1003}
        //     }
        // },
        {
            name: 'E2E',
            testMatch: '*/*Test.spec.js',
            // dependencies: ['setup'],
            use: {
                ...devices['Desktop Chrome'],
                // storageState: STORAGE_STATE,
                viewport: {width: 1792, height: 1003}

            },
        },
    ],

});

