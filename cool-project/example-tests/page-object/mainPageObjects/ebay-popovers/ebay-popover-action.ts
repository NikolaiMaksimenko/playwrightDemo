import { Page } from '@playwright/test';

export class PopoverActions<T extends string> {
    public constructor(protected readonly page: Page) {}

    public async getItem(selector: T, textId?: string) {
        const itemToHover = this.page.locator(selector, { hasText: textId });
        return itemToHover;
    }

    public async hover(selector: T, textId?: string) {
        const itemToHover = this.page.locator(selector, { hasText: textId });
        await itemToHover.hover();
    }
}
