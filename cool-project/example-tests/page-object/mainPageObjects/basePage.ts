import { Page } from '@playwright/test';
import { Utils } from '../utilsObject';
import { LoginPageHome } from './ebayLoginPage';
import { EbayPageHome } from './ebayPageHome';

export abstract class BasePage {
    ebayLogin: LoginPageHome;
    ebayMain: EbayPageHome;
    utilsObject: Utils;

    public constructor(page: Page) {
        this.ebayLogin = new LoginPageHome(page);
        this.ebayMain = new EbayPageHome(page);
        this.utilsObject = new Utils();
    }
}
