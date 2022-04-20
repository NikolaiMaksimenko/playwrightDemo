import { PlaywrightTestConfig, WebServerConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // max failed tests num
    maxFailures: 2,

    reportSlowTests: {
        max: 10,
        threshold: 60000,
    },
    // directory to search for tests
    testDir: './cool-project/example-tests/',

    // tests name match pattern
    testMatch: '*.spec-lol.ts',

    // global timeout for tests
    timeout: 20000,

    // use options for each test
    use: {
        // browser headless or headed
        headless: false,
        // ignore http errors in browser
        ignoreHTTPSErrors: true,
        //
        launchOptions: {
            // to  slow down tests locally for debug ( DONT USE ON CI )
            slowMo: 1500,
            // not required flag for chrome , to speed up tests
            args: ['--use-gl=egl'],
        },

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },

    reporter: [
        ['line'],
        [
            'html',
            {
                open: 'never',
                outputFile: 'index.html',
                outputFolder: './cool-project/test-results/',
            },
        ],
    ],

    // !!! CORE FEATURE , to create a local env for test from scratch
    // webServer: {
    //     // COMMAND TO START LOCALHOST
    //     command: 'yarn start',
    //     // DEFAULT PORT FOR LOCALHOST ( WHICH IS USING ON YOUR PROJECT)
    //     port: 4800,
    //     // REUSE EXISTING SERVER IF YOU STARTED LOCALHOST LOCALLY ( BE CAREFUL ON CI WITH THIS)
    //     reuseExistingServer: true,
    //     timeout: 2 * 60000,
    // },
};

export default config;
