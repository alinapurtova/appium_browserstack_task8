import Page from './page.js';

const login_tab = `//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup`;
const signup_tab = `//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup`;
const username_field = '~input-email';
const password_field = '~input-password';
const repeat_password_field = '~input-repeat-password';
const signUp_button = '~button-SIGN UP';
const error_message = `//android.widget.TextView[@text="Please enter the same password"]`;
const loginForm = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]';

class LoginPage extends Page {

    async openLogin() {
        await this.click('~Login');
    }

    async switchToSignUp() {
        await this.click(signup_tab);
    }

    async switchToLogin() {
        await this.click(login_tab);
    }

    async fillSignUpForm(username, password, repeatPassword) {
        await this.setValue(username_field, username);
        await this.setValue(password_field, password);
        await this.setValue(repeat_password_field, repeatPassword);
    }

    async submitSignUp() {
        await this.click(signUp_button);
    }

    async isErrorDisplayed() {
        return await this.isDisplayed(error_message);
    }

    async isLoginFormDisplayed() {
        return await this.isDisplayed(loginForm);
    }

    async isUsernameDisplayed() {
        return await this.isDisplayed(username_field);
    }

    async isPasswordDisplayed() {
        return await this.isDisplayed(password_field);
    }

    async isRepeatPasswordDisplayed() {
        return await this.isDisplayed(repeat_password_field);
    }
}

export default new LoginPage();