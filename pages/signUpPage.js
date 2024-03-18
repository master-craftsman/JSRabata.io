const {expect} = require("@playwright/test");
const {Helpers} = require("../helpers/helpers");

exports.SignUpPage = class SignUpPage {

    constructor(page) {
        this.page = page
        this.fullname_field = page.getByPlaceholder('Full Name')
        this.username_field = page.getByPlaceholder('example@example.com')
        this.password_field = page.getByPlaceholder('Password', { exact: true })
        this.repeat_password_field = page.getByPlaceholder('Repeat Password')
        this.checkbox_field = page.locator('label')
        this.signup_button = page.getByRole('button', { name: 'Sign up' })
        this.helpers = new Helpers();
        this.privacy_policy_button = page.locator('#registration').getByText('Privacy Policy')
    }

    async gotoSignUpPage() {
        await this.page.goto('/signup');
    }
    async singUp(fullname, password){
        await this.fullname_field.fill(fullname);
        await this.username_field.fill(await this.helpers.generateEmail());
        await this.password_field.fill(password);
        await this.repeat_password_field.fill(password);
        await this.checkbox_field.click();
        await this.signup_button.click();
        await expect(this.page).toHaveURL(/.*verify/);
        // await expect(this.page).toHaveTitle(/.*Verify your email/);

    }

    async openPrivacyPolicy(){
        await this.privacy_policy_button.click();
        await expect(this.page.locator('//div[text()="Privacy Policy"]')).toHaveText('Privacy Policy');
    }

}