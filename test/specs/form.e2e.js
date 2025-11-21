import FormPage from '../pageobjects/form.page.js';
import { faker } from '@faker-js/faker';

const fakeText = faker.internet.displayName();
const switchText = 'Click to turn the switch OFF';

describe('Forms screen', () => {
    it('TC-001: Verify user can fill the form and interact with modal window on the Forms screen', async () => {
        await FormPage.openForms();
        await FormPage.fillInput(fakeText);
        expect(await FormPage.getInputResult()).toBe(fakeText);

        await FormPage.toggleSwitch();
        expect(await FormPage.getSwitchText()).toBe(switchText);

        expect(await FormPage.isActiveButtonEnabled()).toBe(true);

        await FormPage.submitForm();
        expect(await FormPage.isModalDisplayed()).toBe(true);

        await FormPage.confirmModal();
        expect(await FormPage.isModalDisplayed()).toBe(false);

        expect(await FormPage.isInactiveButtonVisible()).toBe(true);

        await FormPage.clickInactiveButton();
        expect(await FormPage.isModalDisplayed()).toBe(false);
    });

});