import {expect, test} from '@playwright/test';
import {SignInPage} from "../pages/sign-in-page";
import {HomePage} from "../pages/home-page";
import {errorMessages, testData} from "./testData";
import {generateRandomString} from "../utils/random-utils";
import {SignUpPage} from "../pages/sign-up-page";

const randomEmail = generateRandomString(3, 10) + '@example.com';
const randomPassword = generateRandomString(5, 15)

let homePage: HomePage
let signInPage: SignInPage
let signUpPage: SignUpPage

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page)
    signInPage = new SignInPage(page)
    signUpPage = new SignUpPage(page)
    await page.goto('/');
});

test.describe.parallel("Sign in tests", () => {

    test('Verify login with correct credentials', async ({page}) => {
        await homePage.goToSignIn()
        await signInPage.loginWithCredentials(testData.username, testData.password)
        await expect(page).toHaveTitle(/Candidate/)
        await expect(page.getByRole("link", {name: testData.username}),).toBeVisible()
    })

    test('Verify incorrect login attempts', async () => {
        await homePage.goToSignIn()
        await signInPage.loginWithCredentials("", "")
        await signInPage.verifyErrorMessage(errorMessages.EMAIL_REQUIRED_MSG)
        await signInPage.verifyErrorMessage(errorMessages.PASSWORD_REQUIRED_MSG)
        await signInPage.loginWithCredentials(randomEmail, testData.password)
        await signInPage.verifyErrorMessage(errorMessages.WRONG_CREDENTIALS_MSG)
        await signInPage.loginWithCredentials(testData.username, randomPassword)
        await signInPage.verifyErrorMessage(errorMessages.WRONG_CREDENTIALS_MSG)
    })
})

test.describe.parallel("Sign up tests", () => {
    test('Verify registration with correct credentials',
        async ({page}) => {
            const password = randomPassword
            await homePage.goToSignUp()
            await signUpPage.signUpWithCredentials(randomEmail, password, password)
            await expect(page).toHaveTitle(/Choose-profile/)
            await expect(page.getByText("I Am...")).toBeVisible()
        })

    test('Verify incorrect registration attempts', async ({page}) => {
        await homePage.goToSignUp()
        await signUpPage.signUpWithCredentials(testData.username, randomPassword, randomPassword)
        await signUpPage.verifyErrorMessage(errorMessages.EMAIL_TAKEN_MSG)
        await signUpPage.signUpWithCredentials(randomPassword, randomPassword, randomPassword)
        await signUpPage.verifyErrorMessage(errorMessages.WRONG_EMAIL_MSG)
        await signUpPage.signUpWithCredentials(randomEmail, randomPassword, randomPassword + "!!!!")
        await signUpPage.verifyErrorMessage(errorMessages.PASSWORD_MATCH_MSG)
    })
});
