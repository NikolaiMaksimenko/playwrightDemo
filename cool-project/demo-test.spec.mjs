import { expect, test } from '@playwright/test';

const googleLocator = '[class="gLFyf gsfi"]';

test('demo test', async ({ page }) => {
    await page.goto('https://google.com');
    const search = await page.waitForSelector(googleLocator, {
        state: 'visible'
    })
    await search.type('Wikipedia', { delay: 10 });
    await page.keyboard.press('Enter');
    await page.waitForTimeout(4000);
    await (await expect(page.locator('h3')).toHaveText('Википедия')).click;
});
