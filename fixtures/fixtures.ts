import { test as base } from '@playwright/test';
import { EbayPageHome } from '../cool-project/example-tests/page-object/mainPageObjects/ebayPageHome';

interface Pages {
    home: EbayPageHome;
    homeWithNavigation: EbayPageHome;
}

export const test = base.extend<Pages>({
    async home({ page }, use) {
        await use(new EbayPageHome(page));
    },

    async homeWithNavigation({ page }, use) {
        const home = new EbayPageHome(page);
        await home.navigate();

        await use(home);
    },
});

export const expect = test.expect;
