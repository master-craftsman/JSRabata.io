import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage.js';


test('calculatorSetTotalStorageTest', async ({ page }) => {
    const Main = new MainPage(page)
    await Main.gotoMainPage()
    await Main.setTotalStorage()

});


