const {expect} = require("@playwright/test");
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_field = page.getByRole('textbox', { name: 'E-mail' })
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }

    async gotoLoginPage() {
        await this.page.goto('/login');
    }
    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
        await expect(this.page).toHaveURL(/.*dashboard/);
    }

}