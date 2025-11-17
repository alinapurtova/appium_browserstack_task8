import Page from './page.js';

const swipe_button = '~Swipe';
const swipe_header = '//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup[1]'
const first_card = `//android.widget.TextView[@text="FULLY OPEN SOURCE"]`;
const second_card = `//android.widget.TextView[@text="GREAT COMMUNITY"]`;
const scrollable_area = '//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup';
const hidden_text = 'android=new UiSelector().text("You found me!!!")';

class SwipePage extends Page {

    async openSwipeScreen() {
        await this.click(swipe_button);
    }

    async waitForFirstCard() {
        await this.waitForDisplayed(first_card);
    }

    async isHeaderDisplayed() {
        return await this.isDisplayed(swipe_header);
    }

    async swipeToNextCard() {
        await this.swipe(800, 1500, 200, 1500);
    }

    async isSecondCardVisible() {
        return await this.isDisplayed(second_card);
    }

    async swipeUp() {
        const area = await $(scrollable_area);
        await driver.execute('mobile: swipeGesture', {
            elementId: area.elementId,
            direction: 'up',
            percent: 0.9
        });
    }

    async isHiddenTextVisible() {
        return await this.isDisplayed(hidden_text);
    }
}

export default new SwipePage();