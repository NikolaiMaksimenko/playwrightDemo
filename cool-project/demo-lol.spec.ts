import { expect, test } from '@playwright/test';
import { inputTextAndWaitNavigation } from './example-tests/helpers';

export const googleLocator = '[class="gLFyf gsfi"]';

test('Arthurs test', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
    await inputTextAndWaitNavigation('Wikipedia', page);

    expect(page.locator('h3')).toHaveText('Википедия');
});

test('Arthurs test', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
    await inputTextAndWaitNavigation('Wikipedia', page);

    expect(page.locator('h3')).toHaveText('Википедия');
});

test('demo test', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle' });
    const googleSearch = await page.waitForSelector(googleLocator, {
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
