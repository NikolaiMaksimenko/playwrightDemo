import { Page } from '@playwright/test';
import { BasePage } from './mainPageObjects/basePage';

export class MainPage extends BasePage {
    public constructor(page: Page) {
        super(page);
    }
}
