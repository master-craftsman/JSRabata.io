const {expect} = require("@playwright/test");
const {Helpers} = require("../helpers/helpers");

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page
        this.privacy_policy_button = page.getByText('Privacy policy', { exact: true })
        this.try_it_free_button = page.getByRole('link', { name: 'Try it for free', exact: true })
        this.helpers = new Helpers();
        this.setTotalStorage = page.locator('#dataApiStoredInput');
        this.setMonthlyDownloadedData = page.locator('#dataApiStoredInput');
        this.ShowedCalculadetData = page.locator('//p[@id=\"rabataMobileApi\"]')

    }

    async gotoMainPage() {
        await this.page.goto('');
    }

    async openPrivacyPolicy(){
        await this.privacy_policy_button.click();
        await expect(this.page.locator('//div[text()="Privacy Policy"]')).toHaveText('Privacy Policy');
    }

    async openTryItForFree(){
        await this.try_it_free_button.click();
        await expect(this.page).toHaveURL(/.*signup/);
    }

    async checkTotalStorage(){
        await this.setTotalStorage.fill('314');
        await expect(this.ShowedCalculadetData).toBeVisible();
    }


}