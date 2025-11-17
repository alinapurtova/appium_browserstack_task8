import SwipePage from '../pageobjects/swipe.page.js';

describe('Swipe screen', () => {
    it('Tc-004: Verify user can swipe through carousel cards on the Swipe screen', async () => {
        await SwipePage.openSwipeScreen();
        await SwipePage.waitForFirstCard();
        await SwipePage.swipeToNextCard();
        expect(await SwipePage.isSecondCardVisible()).toBe(true);
    });

    it('TC-005: Verify user can scroll to the bottom of the Swipe screen and reveal hidden text', async () => {
        await SwipePage.openSwipeScreen();
        expect(await SwipePage.isHeaderDisplayed()).toBe(true);
        expect(await SwipePage.isHiddenTextVisible()).toBe(false);
        await SwipePage.swipeUp();
        expect(await SwipePage.isHiddenTextVisible()).toBe(true);
    });
});