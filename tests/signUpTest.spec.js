import { test, expect } from '@playwright/test';
import {SignUpPage} from '../pages/signupPage.js';


test('signupTest', async ({ page }) => {
    const SignUp = new SignUpPage(page)
    await SignUp.gotoSignUpPage()
    await SignUp.singUp('Antonio Banderos','Ratata2024!')
});