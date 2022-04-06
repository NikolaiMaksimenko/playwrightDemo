import { test, expect } from '@playwright/test';

test.describe('Navigate to Ebay and get few prices', () => {
    test.beforeEach(async ({ page }) => {
        const homeAndGarden = page.locator('[class="hl-cat-nav__js-tab"]', { hasText: 'Home & Garden' });
        const pets = page.locator('[class=hl-cat-nav__js-link]', { hasText: 'Pets' });
        const catSupplies = page.locator('[class="b-guidancecard__title"]', { hasText:'Cat Supplies'});
        await page.goto('https://www.ebay.com/', { waitUntil: 'networkidle' });
        await homeAndGarden.hover();
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            pets.click(),
        ]);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            catSupplies.click(),
        ]);
    });
    test('User selects Furniture category and gets the price of 3rd item', async ({ page }) => {
        const furnitureScratchers = page.locator('[class="b-guidancecard__title"]', { hasText:'Furniture & Scratchers'});
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            furnitureScratchers.click(),
        ]);
        const getPrice = page.$$('[class="s-item__price"]', [3]);
        expect(getPrice).toContain('$12.00');
    });
});
