const {test,expect} = require ('@playwright/test');




test('Page Playwright test',async({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    console.log(await page.title());
    //css type, fill
    //await page.locator('#username').fill("ankitbhagoliwal.b014233b76c8@agentforce.com"); we do not requie this expression because we have already created a variable for the same
    await userName.fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    //await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await expect(cardTitles.first()).toHaveText("iphone X");
    console. log(await cardTitles.first().textContent()); // instead of usng page.locator(".card-body a").first().textContent() we can use page.locator(".card-body a").nth(0).textContent() because first() is used to get the first element of the locator and nth(0) is used to get the first element of the locator. 
    // lets declare a variable for the same and use it in the console.log statement.   
    console. log(await cardTitles.nth(1).textContent());
    // console.log(page.getByText('iphone X'));
    //await page.click('text=iphone X');

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


});
console.log("Test completed successfully");







test('UI Controls',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.getByRole('radio',{name:'User'}).last().click();
    await page.locator("#okayBtn").click();
    expect(page.getByRole('radio',{name:'User'}).last().isChecked()).toBeTruthy();
    console.log(await page.getByRole('radio',{name:'User'}).last().isChecked()); // it gives boolean value true or false
    await page.locator('#terms').check();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");

});

test.only('Child mywindows handle', async({browser})=> // it is used to handle the child windows
{
    const context = await browser.newContext(); // it is used to create a new browser context. A browser context is an isolated environment in which you can run your tests. Each context has its own cookies, local storage, and session storage. It is used to create a new page in the browser context.
    const page = await context.newPage();// it is used to create a new page in the browser context. A page is a single tab in the browser. It is used to interact with the web page.
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // it is used to navigate to the specified URL. It is used to load the web page in the browser.
    const documentLink = page.locator("a[href*='documents-request']"); // 1st Step - identify link // it is used to locate the element on the web page. It is used to find the element on the web page using the specified selector. It is used to interact with the element on the web page.
    const [newPage]= await Promise.all([
        context.waitForEvent('page'), // Step 2 - Listen new tab event - const newPagePromise = context.waitForEvent('page'); // it will wait for the new page to open
        documentLink.click(), // step 3 - click on  link // it will click on the link and open the new page
    ]);
    const text = await newPage.locator(".red").textContent();     // step 4 - get text from new tab // it will get the text from the new page
    const arrayText = text.split("@");
    const domain = arrayText [1].split(" ")[0] // it will split the text and get the email id from the text and trim the spaces from the email id
    console.log(domain);
    await page.locator("#username").fill(domain); // step 6 - type in username field // it will type the email id in the username field
    console.log(await page.locator("#username").textContent()); // it will print the email id in the console


});