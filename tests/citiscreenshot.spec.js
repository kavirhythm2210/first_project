import { test, expect } from '@playwright/test';


test('citiscreenshot', async ({ page }) => {

    await page.goto("https://www.citigroup.com/global");
    if (page.locator('#onetrust-close-btn-container').first().isVisible()) {
        await page.locator('#onetrust-close-btn-container').first().click();
    }
    const header = page.locator('#GpaMenu00');
    await expect(header).toMatchAriaSnapshot({ path: "./screenshots/header.png" });
    const footer = page.locator('#GpaFooter10');
    await expect(footer).toMatchAriaSnapshot({ path: "./screenshots/footer.png" });





});






