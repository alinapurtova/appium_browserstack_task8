import { faker } from '@faker-js/faker';
import LoginPage from '../pageobjects/login.page.js';

const username = faker.internet.email();
const password = faker.internet.password();
const differentPassword = faker.internet.password();

describe('Login screen', () => {
    it('TC-002: Verify navigation between Login and Sign Up forms works correctly', async () => {
        await LoginPage.openLogin();
        expect(await LoginPage.isLoginFormDisplayed()).toBe(true);
        expect(await LoginPage.isUsernameDisplayed()).toBe(true);
        expect(await LoginPage.isPasswordDisplayed()).toBe(true);
        await LoginPage.switchToSignUp();
        expect(await LoginPage.isLoginFormDisplayed()).toBe(true);
        expect(await LoginPage.isUsernameDisplayed()).toBe(true);
        expect(await LoginPage.isRepeatPasswordDisplayed()).toBe(true);
        await LoginPage.switchToLogin();
        expect(await LoginPage.isRepeatPasswordDisplayed()).toBe(false);
    });

    it('TC-003: Verify error message when passwords do not match during Sign Up', async () => {
        await LoginPage.openLogin();
        await LoginPage.switchToSignUp();
        expect(await LoginPage.isLoginFormDisplayed()).toBe(true);
        expect(await LoginPage.isUsernameDisplayed()).toBe(true);
        expect(await LoginPage.isRepeatPasswordDisplayed()).toBe(true);
        await LoginPage.fillSignUpForm(username, password, differentPassword);
        await LoginPage.submitSignUp();
        const errorVisible = await LoginPage.isErrorDisplayed();
        await expect(errorVisible).toBe(true);
    });
});