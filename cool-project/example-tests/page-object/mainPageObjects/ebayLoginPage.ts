import { Page } from '@playwright/test';

export class LoginPageHome {
    public constructor(protected readonly page: Page) {}

    public async navigateOnLogin() {
        await this.page.goto('loginUrl');
    }

    public async fillLoginForm(username: string, pass: string) {
        await this.page.locator('loginformSelector').fill(username);
        await this.page.locator('loginformSelector').fill(pass);
        await this.page.locator('dssds').click();
    }

    public async confirmLoginSuccess(login: string, pass: string) {
        return this.page.locator(login, { hasText: pass });
    }
}
