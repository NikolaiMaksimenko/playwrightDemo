import { EbayPageHome } from './page-object/mainPageObjects/ebayPageHome';
import { expect, test } from '@playwright/test';
import { ElectronicPopover } from './page-object/locators';

test.describe(' Go to Ebay And work with categories filter', () => {
    test.beforeEach(async ({ page }) => {
        const ebayHomePage = new EbayPageHome(page);
        await ebayHomePage.navigate();
    });
    test.only('open Electronics tab and check item', async ({ page }) => {
        const ebayHomePage = new EbayPageHome(page);

        await ebayHomePage.electronicsPopover.hover(
            ElectronicPopover.ElectronicsFiler,
            'Electronics',
        );

        const cellPhoneItem = await ebayHomePage.electronicsPopover.getItem(
            ElectronicPopover.CellPhonesItem,
            'Cell phones and accessories',
        );

        await expect(cellPhoneItem).toBeVisible();
    });
});
