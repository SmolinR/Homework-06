const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    try {
        const page = await browser.newPage();
        await page.goto('https://pptr.dev/');
        await page.type('input[placeholder=Search]', 'pdf')
        await page.waitForTimeout(5000)
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);
        await page.pdf({ path: 'enter.pdf', format: 'A4' })
        await browser.close();
    } catch (error) {
        await browser.close();

    } finally {
        await browser.close();
    }
})();