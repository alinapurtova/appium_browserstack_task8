export default class Page {

    async click(locator) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }

    async setValue(locator, value) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(value);
    }

    async getText(locator) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout: 10000 });
        return await element.getText();
    }

    async isDisplayed(locator) {
        try {
            return await (await $(locator)).isDisplayed();
        } catch {
            return false;
        }
    }

    async swipe(startX, startY, endX, endY) {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 600, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    async waitForDisplayed(locator, timeout = 10000) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout });
    }

    async isEnabled(locator) {
        return await (await $(locator)).isEnabled();
    }
}