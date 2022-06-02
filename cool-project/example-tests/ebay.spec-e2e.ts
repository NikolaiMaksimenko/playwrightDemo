import { EbayPageHome } from './page-object/mainPageObjects/ebayPageHome';
import { request, expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';
import { ElectronicPopover } from './page-object/locators';

test.describe(' Go to Ebay And work with categories filter', () => {
    test.beforeEach(async ({ home }) => {
        await home.navigate();
    });
    test('No fixtures: open Electronics tab and check item @auth', async ({ page }) => {
        const ebayHomePage = new EbayPageHome(page);

        // EXAMPLE : how to test some API endpoint together with e2e checks
        //
        // check some requestData before navigation with saved LoginContext
        // const newContext = await request.newContext({
        //     // use for API authorization if you have it
        //     // httpCredentials: {
        //     //     username: '',
        //     //     password: '',
        //     // },
        //     storageState: './navigationState.json', //path to your state
        // });

        // const loginRequest = await newContext.post('https://www.ebay.com', {
        //     data: {
        //         message: ' allow me to login americans!',
        //     },
        // });

        // await expect.soft(loginRequest.status()).toBe(200);

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

    test('With basic Fixture: open Electronics tab and check item @basic', async ({ home }) => {
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
