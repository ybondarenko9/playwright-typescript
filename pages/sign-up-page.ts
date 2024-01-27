import {type Locator, type Page, test} from '@playwright/test';
import {BasePage} from "./base-page";

export class SignUpPage extends BasePage {
    readonly email: Locator;
    readonly password: Locator;
    readonly repeatPassword: Locator;
    readonly createAccount: Locator;

    constructor(page: Page) {
        super(page)
        this.email = page.locator('#email')
        this.password = page.locator('#password')
        this.repeatPassword = page.locator("#repeatPassword");
        this.createAccount = page.locator("button", {hasText: "Create Account"});
    }

    async signUpWithCredentials(email, password, repeatPassword) {
        await test.step(`Fill in email "${email}", password "${password}", repeat password "${repeatPassword}" 
        and press "Create Account" button`,
            async () => {
                await this.email.fill(email);
                await this.password.fill(password);
                await this.repeatPassword.fill(repeatPassword);
                await this.createAccount.click();
            })
    }
}