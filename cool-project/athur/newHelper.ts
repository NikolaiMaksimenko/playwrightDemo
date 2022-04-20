import { Page } from '@playwright/test';

export async function searchLocator(selector: string, byText?: string) {
    return this.page.locator(selector, {hasText: byText});
}