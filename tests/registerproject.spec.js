const {test,expect} = require ('@playwright/test');

    test('Page Playwright test',async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
                const occupationDropdown = page.locator('select.custom-select.ng-untouched.ng-pristine.ng-valid');
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.getByText('Register here').click();
        await page.locator('#firstName').fill("Ankit");
        await page.locator('#lastName').fill("Bhagoliwal");
        await page.locator('#userEmail').fill("ankitbhagoliwal@gmail.com");
        await page.locator('#userMobile').fill("1234567890");
        await occupationDropdown.selectOption({label:'Engineer'}); // Select Engineer from the dropdown

        await page.locator("input[value='Male']").check();
        //await page.getByLabel('Male').check();    // Select Male  

        await page.locator('#userPassword').fill("Password@123");
        await page.locator('#confirmPassword').fill("Password@123");
        await page.locator('#login').click();
        await page.locator('input[type="checkbox"]').check();
        // Success message
        //await expect(page.locator('.alert-success')).toHaveText('Account Created Successfully');
        //click on login
        await page.getByText('Login here').click();
        await page.locator('#userEmail').fill("ankitbhagoliwal@gmail.com");
        await page.locator('#userPassword').fill("Password@123");
        await page.locator('#login').click();
        const titles = await page.locator('.card-body b').allTextContents();
        console.log(titles);
    });
    