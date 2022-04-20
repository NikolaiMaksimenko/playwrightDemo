import { expect, test } from '@playwright/test';
import { categoryMenu, subCategoryMenu, carouselCategory, aSideCategoryMenu, priceText, prices, } from '../athur/page-object/locators';

test.describe('Comp&Parts testing', () => {
    test('Get AM4 CPU', async ({ page }) => {
        await page.goto('https://ebay.com', { waitUntil: 'networkidle' });
        await page.locator(categoryMenu, { hasText: 'Shop by category' }).click();
        await page.locator(subCategoryMenu, { hasText: 'Computers & Tablets' }).click();
        await page
            .locator(carouselCategory, { hasText: 'Computer Components & Parts' })
            .click();
        await page.locator(carouselCategory, { hasText: 'CPUs/Processors'}).click();

        await page.locator(carouselCategory, { hasText: 'Socket AM4' }).click();
        await page.waitForSelector(prices);
        const getPrice = await page.locator(priceText).allInnerTexts();

        expect(console.log(getPrice[0]));
  
    })
})
