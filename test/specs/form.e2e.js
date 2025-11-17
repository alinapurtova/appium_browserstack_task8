import FormPage from '../pageobjects/form.page.js';
import { faker } from '@faker-js/faker';

const fakeText = faker.internet.displayName();
const switchText = 'Click to turn the switch OFF';

describe('Forms screen', () => {
    it('TC-001: Verify user can fill the form and interact with modal window on the Forms screen', async () => {
        await FormPage.openForms();
        await FormPage.fillInput(fakeText);
        const result = await FormPage.getInputResult();
        expect(result).toBe(fakeText);
        await FormPage.toggleSwitch();
        const switchField = await FormPage.getSwitchText();
        expect(switchField).toBe(switchText);
        expect(await FormPage.isActiveButtonEnabled()).toBe(true);
        await FormPage.submitForm();
        expect(await FormPage.isModalDisplayed()).toBe(true);
        await FormPage.confirmModal();
        expect(await FormPage.isModalDisplayed()).toBe(false);
        const isInactiveVisible = await FormPage.isInactiveButtonVisible();
        expect(isInactiveVisible).toBe(true);
        await FormPage.clickInactiveButton();
        expect(await FormPage.isModalDisplayed()).toBe(false);
    });
});