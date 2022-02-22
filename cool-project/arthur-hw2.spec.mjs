import { test } from '@playwright/test';

const googleLocator = '[class="gLFyf gsfi"]';

test.describe('Tests of the search feature', () => {
    test('input "Google" text and search it', async ({ page }) => {
        await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
        const googleSearch = await page.waitForSelector(googleLocator, {
            state: 'visible',
            timeout: 5000,
        });
        await googleSearch.type('Google');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            page.keyboard.press('Enter'),
        ]);
        await page.screenshot({ path: 'screenshots/Test1' + Date.now() + '.png', fullPage: true });
        await page.close();
    });

    test('Test with empty input field', async ({ page }) => {
        await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
        const googleSearch = await page.waitForSelector(googleLocator, {
            state: 'visible',
            timeout: 5000,
        });
        await googleSearch.type('Playwright');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            page.keyboard.press('Enter'),
        ]);
        await page.screenshot({ path: 'screenshots/Test1' + Date.now() + '.png', fullPage: true });
        await page.close();
    });
});
