import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage.js';


test('tryItForFreeTest on Top', async ({ page }) => {
    const Main = new MainPage(page)
    await Main.gotoMainPage()
    await Main.openTryItForFree()
});

test('tryItForFreeTest on Below', async ({ page }) => {
    const Main = new MainPage(page)
    await Main.gotoMainPage()
    await Main.openTryItForFree()
});