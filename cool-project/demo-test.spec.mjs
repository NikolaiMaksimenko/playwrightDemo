import { expect, test } from '@playwright/test';

const googleSearchFieldId = '[class="YacQv gsfi"]';

test('demo test', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
    const googleSearch = await page.waitForSelector(googleSearchFieldId, {
        state: 'visible',
        timeout: 5000,
    });
    await googleSearch.type('azazaazza', { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.keyboard.press('Enter'),
    ]);

    await page.waitForTimeout(4000);
});
