import { expect, test, chromium } from '@playwright/test';
import { LoginPageHome } from './page-object/mainPageObjects/ebayLoginPage';
import { MainPage } from './page-object/mainPage';

test.describe('loginFormTest', () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.ebayLogin.navigateOnLogin();
    });

    test('fill login valid', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.ebayLogin.fillLoginForm();
        await mainPage.ebayLogin.confirmLoginSuccess();
        const headerOnMainPage = await mainPage.ebayMain.findLocator();
        expect(headerOnMainPage).toBeVisible();
    });

    test('fill invalid ', async ({ page }) => {
        const loginPage = new LoginPageHome(page);
        await loginPage.fillLoginForm('invalidUser', 'invalidPass');
    });

    test('fill login valid', async ({ page }) => {
        const loginPage = new LoginPageHome(page);
        await loginPage.fillLoginForm('invalidUser', 'invalidPass');
    });

    test('fill login valid', async ({ page }) => {
        const loginPage = new LoginPageHome(page);
        await loginPage.fillLoginForm('invalidUser', 'invalidPass');
    });
});
