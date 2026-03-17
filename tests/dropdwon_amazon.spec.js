import {test,expect} from'@playwright/test'

test('dropdown',async({page})=>{
    await page.goto('https://amazon.ca');
    const dropdown = await page.locator('#searchDropdownBox');
    await dropdown.selectOption("search-alias=automotive");
    await page.locator('[type="submit"]').click();
    //await page.pause();
    await expect(dropdown).toHaveValue("search-alias=automotive");

}


)
test('inputValue',async({page})=>{

    await page.goto("https://automationexercise.com/login");
    await page.locator('[type="text"]').fill('testhk');
    console.log(await page.locator('[type="text"]').textContent());
}


)