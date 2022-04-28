import { Page } from '@playwright/test';

export class EbayPageHome {
    public constructor(protected readonly page: Page) {}

    public async navigate(allUrls: string) {
        await this.page.goto(allUrls);
    }

    public async findLocator(selector: string, textId?: string) {
        return this.page.locator(selector, { hasText: textId });
    }
}
