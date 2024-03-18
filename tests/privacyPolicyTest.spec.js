import { test, expect } from '@playwright/test';
import {SignUpPage} from '../pages/signupPage.js';
import {MainPage} from '../pages/mainPage.js';


test('privacyPolicyTest on RegistrationPage', async ({ page }) => {
    const SignUp = new SignUpPage(page)
    await SignUp.gotoSignUpPage()
    await SignUp.openPrivacyPolicy()
});

test('privacyPolicyTest on MainPage', async ({ page }) => {
    const Main = new MainPage(page)
    await Main.gotoMainPage()
    await Main.openPrivacyPolicy()
});