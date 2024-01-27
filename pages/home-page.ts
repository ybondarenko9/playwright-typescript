import {type Locator, type Page, test} from '@playwright/test';
import {BasePage} from "./base-page";

export class HomePage extends BasePage {
    readonly signInButton: Locator;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        super(page)
        this.signInButton = page.locator('a', {hasText: 'Sign In'});
        this.signUpButton = page.locator('a', {hasText: 'Sign Up'});
    }

    async goToSignIn() {
        await test.step(" Click Sign In button", async () =>
            this.signInButton.click());
    }

    async goToSignUp() {
        await test.step(" Click Sign Up button", async () =>
            this.signUpButton.click());
    }
}