import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    reporter: [
        ['line'],
        [
            'html',
            {
                open: 'never',
                outputFile: 'fancy.html',
                outputFolder: './cool-project/test-results',
            },
        ],
    ],

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
    use: {
        launchOptions: {
            headless: false,
        },
    },
};

export default config;
