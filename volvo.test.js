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

    it('should have the correct title', async () => {
        const title = await browser.getTitle();
        console.log('Actual title:', title);
        expect(title).to.equal('Safety - Highlights | Volvo Cars'); 
    });

    it('should have the correct main heading', async () => {
        const heading = await $('h1');
        const isDisplayed = await heading.isDisplayed();
        expect(isDisplayed).to.be.true;

        const text = await heading.getText();
        console.log('Main heading text:', text);
        expect(text).to.equal('Safety'); 
    });
});
