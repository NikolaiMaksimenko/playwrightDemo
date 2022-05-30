import { EbayPageHome } from './page-object/mainPageObjects/ebayPageHome';
import { expect, test } from '../../fixtures/fixtures';
import { ElectronicPopover } from './page-object/locators';

test.describe(' Go to Ebay And work with categories filter', () => {
    test.beforeEach(async ({ home, page }) => {
        await home.navigate();
        await page.context().storageState({ path: './loginStorage.json' });
        // READ FOR GLOBAL SETUP  & STORAGE STATE VIA LOGIN : https://playwright.dev/docs/test-advanced#global-setup-and-teardown
    });
    test.only('No fixtures: open Electronics tab and check item', async ({ page, request }) => {
        const ebayHomePage = new EbayPageHome(page);
        await ebayHomePage.navigate();

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

    test('With basic Fixture: open Electronics tab and check item ', async ({ home }) => {
        await home.navigate();
        await home.electronicsPopover.hover(ElectronicPopover.ElectronicsFiler, 'Electronics');

        const cellPhoneItem = await home.electronicsPopover.getItem(
            ElectronicPopover.CellPhonesItem,
            'Cell phones and accessories',
        );

        await expect(cellPhoneItem).toBeVisible();
    });

    test.describe('Backend tests', () => {});
});
