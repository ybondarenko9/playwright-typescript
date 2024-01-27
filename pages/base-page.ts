import {expect, Page, test} from '@playwright/test'

export abstract class BasePage {
    readonly page: Page

    protected constructor(page: Page) {
        this.page = page
    }

    async wait(time: number) {
        await this.page.waitForTimeout(time)
    }

    async verifyErrorMessage(expectedMessage: string) {
        await test.step(`Verify error message '${expectedMessage}' displayed`, async () =>
            expect(this.page.getByText(expectedMessage)).toBeVisible()
        )
    }
}
