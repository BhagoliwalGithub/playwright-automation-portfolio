const {test,expect} = require ('@playwright/test');

test.only('Page Playwright test',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("ankitbhagoliwal@gmail.com");
    await page.locator("#userPassword").fill("Password@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle'); // if this will not work use the alternate solution of using the waitForTimeout method
    //await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
});