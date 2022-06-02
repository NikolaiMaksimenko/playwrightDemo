import { EbayPageHome } from './page-object/mainPageObjects/ebayPageHome';
import { chromium } from '@playwright/test';

// READ FOR GLOBAL SETUP  & STORAGE STATE VIA LOGIN : https://playwright.dev/docs/test-advanced#global-setup-and-teardown

async function globalSetup() {
    const browser = await chromium.launch();
    // const context = await browser.newContext({ storageState: 'yourSavedDataPAth' }); // optional if you need to pass some context to your global setup
    // const page = await context.newPage();
    const page = await browser.newPage();
    const ebayPage = new EbayPageHome(page);
    await ebayPage.navigate();

    await page
        .context()
        .storageState({ path: './navigationState.json' })
        .then(() => console.info('State saved!'));
    await browser.close();
}

export default globalSetup;
