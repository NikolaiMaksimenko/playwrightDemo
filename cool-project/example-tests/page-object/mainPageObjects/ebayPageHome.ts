import { Page } from '@playwright/test';
import { EbayPopover } from './ebay-popovers/ebay-popovers';

export class EbayPageHome extends EbayPopover {
    public constructor(protected readonly page: Page) {
        super(page);
    }

    public async navigate() {
        await this.page.goto('https://www.ebay.com/');
    }
}
