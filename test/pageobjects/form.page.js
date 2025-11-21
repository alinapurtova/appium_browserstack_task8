import Page from './page.js';

const forms_button = '~Forms';
const input_field = '~text-input';
const input_result = '~input-text-result';
const switch_button = '~switch';
const switch_text = '~switch-text';
const active_button = '~button-Active';
const inactive_button = '~button-Inactive';
const modal_message = '//android.widget.TextView[@resource-id="android:id/message"]';
const ok_button = '//android.widget.Button[@resource-id="android:id/button1"]';

class FormPage extends Page {

    async openForms() {
        await this.click(forms_button);
    }

    async fillInput(text) {
        await this.setValue(input_field, text);
    }

    async getInputResult() {
        return await this.getText(input_result);
    }

    async toggleSwitch() {
        await this.click(switch_button);
    }

    async getSwitchText() {
        return await this.getText(switch_text);
    }

    async isActiveButtonEnabled() {
        return await this.isEnabled(active_button);
    }

    async submitForm() {
        await this.click(active_button);
    }

    async isModalDisplayed() {
        return await this.isDisplayed(modal_message);
    }

    async confirmModal() {
        await this.click(ok_button);
    }

    async isInactiveButtonVisible() {
        return await this.isDisplayed(inactive_button);
    }

    async clickInactiveButton() {
        await this.click(inactive_button);
    }
}

export default new FormPage();