import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage.js';

test('Authentication testing', async ({ page }) => {
    const  Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('popawo3967@minhlun.com', 'Rabata2024!' )
});
