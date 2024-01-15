import {test} from '@playwright/test'


test('Static Dropdown', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel("Username","rahulshettyacademy").waitFor();
    await page.getByLabel("Username","rahulshettyacademy");
    await page.getByLabel("Password","learning");
    const dropdown = await page.locator("select[class='form-control']");
    await dropdown.selectOption("consult");  //value = 'consult' -> <option?
    //await page.pause();
});

test('Multiple ways to select option from dropdown', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").selectOption({label:'India'}) //label /visible text
    await page.locator("#country").selectOption('India'); //visible text
    await page.locator("#country").selectOption({value:'india'}); //value
    await page.locator("#country").selectOption({index: 2});  //index
    await page.pause();

});

test('Multi select dropdown', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#colors").selectOption(['Red','Green']);
    //or 
    //await page.selectOption("#colors",['White','Red','Yellow']);
    await page.pause();

});

test('Boostrap dropdown', async ({page})=>
{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator(".multiselect");
    //await page.locator("ul li label input");

    const options = await page.$$("ul li label");
    for (const option of options )
    {
       const value = await option.textContent();
       console.log('value is:',value); 

       // to select multiple options
       if(value.includes('Angular') || value.includes('Python'))
       {
           await option.click();
       }
    }

});

test.only('Auto suggest/ auto complete dropdown', async ({page})=>
{
    await page.goto("https://www.redbus.in/");
    await page.fill('#src','Mumbai');
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");
    const cities = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    for(const c of cities)
    {
        const value = await c.textContent();
        //console.log(value);
        if(value.includes('Bandra'))
        {
            await c.click();
            break;
        }
    }
});