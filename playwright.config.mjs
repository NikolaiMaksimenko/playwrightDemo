import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const pathToExtension = 'C:\\Users\\Karte\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\ppnbnpeolgkicgegkbkbjmhlideopiji';
const config = {
    use: {
        launchOptions: {
            headless: false,
        },
    },
    launchOptions: {
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    }
};

export default config;
