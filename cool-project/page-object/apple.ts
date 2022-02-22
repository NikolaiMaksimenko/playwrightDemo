import { Page } from '@playwright/test';

export class EbayPage {
    public constructor(protected page: Page) {}

    public async navigate() {
        await this.page.goto('https://www.ebay.com/');
    }

    public async findLocator(selector: string, textId?: string) {
        return this.page.locator(selector, { hasText: textId });
    }
}
