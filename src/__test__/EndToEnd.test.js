
import puppeteer from 'puppeteer';

describe('filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
        const eventList = await page.$('.event-list li');
        expect(eventList).toBeDefined()
    });

    test('User should see a list of suggestions when they search for a city.', async () => {
        await page.type('.city', 'Berlin')
        const locationSuggestion = await page.$('.suggestions li');
        expect(locationSuggestion).toBeDefined()
    });

    test('User can select a city from the suggested list.', async () => {
        await page.type('.city', 'Berlin')
        await page.click('.suggestions li');
    });
})


describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details');
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details');
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeNull();
    });
});