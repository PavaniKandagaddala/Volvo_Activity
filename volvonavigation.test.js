describe('Volvo Car Safety Page', () => {
    let expect;

    before(async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        ({ expect } = await import('chai'));

        const acceptCookieButton = await $('#onetrust-accept-btn-handler');
        if (await acceptCookieButton.isDisplayed()) {
            console.log('Cookies page is displayed');
            await acceptCookieButton.click();
        } else {
            console.log('Cookies page is not displayed');
        }
    });

    it('Click on Culture & vision in Safety at the top', async () => {
        const cultureSelector = await $('//em[text()="Culture & vision"]');
        await cultureSelector.waitForClickable({ timeout: 2000 });
        await cultureSelector.click();
    });
    it('Click on Our Learning Never Ends', async () => {
        const learnSelector = await $('//h2[text()="Our learning never ends..."]');
        if (!await learnSelector.isDisplayed()) {
            const scrollElement = await $('//img[@data-autoid="media-highlight-1:image"]'); 
            await scrollElement.scrollIntoView();
            await scrollElement.waitForDisplayed({ timeout: 2000 });
        }
    });
});
