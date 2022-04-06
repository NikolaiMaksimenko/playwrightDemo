import { expect, test } from '@playwright/test';


 test.describe('Comp&Parts testing', () => {
    test('Get AM4 CPU', async ( {page} ) => {
        await page.goto('https://ebay.com', {waitUntil: 'networkidle'});
        await page.locator('button', {hasText:'Shop by category'}).click();
        await page.locator('[class=scnd]', {hasText:'Computers & Tablets'}).click();
        await page.locator('[class=b-guidancecard__title]', {hasText: 'Computer Components & Parts'}).click();
        await page.locator('[id="s0-18-12_2-0-1\\[0\\]-0-0"] >> text=CPUs/Processors').click()

        await page.locator('[class=b-guidancecard__title]', {hasText: 'Socket AM4'}).click();
        await page.waitForSelector('[class="s-item__details clearfix"] [class="s-item__price"]');
        const priceText = await page.$$('[class="s-item__price"]');

        expect(console.log(priceText));
    })
})