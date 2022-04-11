import { Page } from '@playwright/test';

export async function inputTextAndWaitNavigation(textToInput: string, page: Page) {
    const search = await page.waitForSelector('[class="gLFyf gsfi"]', {
        state: 'visible',
    });
    await search.type(textToInput, { delay: 10 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.keyboard.press('Enter'),
    ]);
}
