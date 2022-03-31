import { expect, test } from '@playwright/test';

// 1. go to ebay
// 2. click shop by cat
// 3. electronics /comp & tabl click
// 4. computer comp & parts
// 5. see all in Comp

// ASSERT : get 1st element price

test.describe.only('Ebay', () => {
    test('get to the computer-parts page and take first element price', async ({ page }) => {
        await page.goto('https://www.ebay.com/');
        const shopByCategory = '[id="gh-shop-a"]';
        await page.click(shopByCategory);
        const a = page.locator('[class="scnd"]', { hasText: 'Computers' });
        await a.click();
        await page.waitForTimeout(5000);
    });
});
