import { test, expect } from '@playwright/test';

const searchField = '[class="YacQv gsfi"]';

test('first test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const googleSearch = await page.waitForSelector(searchField, {
        state: 'visible',
        timeout: 5000,
    });
    await googleSearch.type('Playwright', { delay: 50 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.keyboard.press('Enter'),
    ]);
    await page.click('text=Playwright: Fast and reliable end-to-end testing for modern ...');
    const getStarted = await page.waitForSelector('[class="getStarted_1iQB"]', {
        state: 'visible',
        timeout: 5000,
    });
    await getStarted.click();
    expect(page).toHaveURL('https://playwright.dev/docs/intro');
});
