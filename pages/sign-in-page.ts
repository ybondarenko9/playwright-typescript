import {expect, type Locator, type Page, test} from '@playwright/test';
import {allure} from "allure-playwright";
import {BasePage} from "./base-page";

export class SignInPage extends BasePage {
    readonly email: Locator
    readonly password: Locator
    readonly signInButton: Locator;

    constructor(page: Page) {
        super(page)
        this.email = page.locator('#email')
        this.password = page.locator('#password')
        this.signInButton = page.locator('button', {hasText: 'Sign In'});
    }

    async loginWithCredentials(email, password) {
        await test.step(`Fill in email "${email}", password "${password}" and submit`,
            async () => {
                await this.email.fill(email);
                await this.password.fill(password);
                await this.signInButton.click();
            })
    }
}