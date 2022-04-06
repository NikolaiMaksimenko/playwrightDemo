import { test, expect } from '@playwright/test';

test.describe('Navigate to Ebay and get few prices', () => {
    test.beforeEach(async ({ page }) => {
        const homeAndGarden = page.locator('[class="hl-cat-nav__js-tab"]', {
            hasText: 'Home & Garden',
        });
        const pets = page.locator('[class=hl-cat-nav__js-link]', { hasText: 'Pets' });
        const catSupplies = page.locator('[class="b-guidancecard__title"]', {
            hasText: 'Cat Supplies',
        });
        await page.goto('https://www.ebay.com/', { waitUntil: 'networkidle' });
        await homeAndGarden.hover();
        await Promise.all([page.waitForNavigation(), pets.click()]);
        await Promise.all([page.waitForNavigation(), catSupplies.click()]);
    });

    test('User selects Furniture category and gets the price of 3rd item', async ({ page }) => {
        const furnitureScratchers = page.locator('[class="carousel__snap-point"]', {
            hasText: 'Furniture & Scratchers',
        });

        await Promise.all([page.waitForNavigation(), furnitureScratchers.click()]);

        const getPrice = (await page.$$('[class="s-item__price"]'))[3];
        const text = (await getPrice.textContent()).toString();
        expect(text).toContain('$17.44');
    });
});
