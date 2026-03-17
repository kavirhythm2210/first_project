import {test, expect} from '@playwright/test';
import { LoginPage } from  '../pages/LoginPage';

test('loginpage',async({page})=>{

    const Login = new LoginPage(page);



await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
const email= 'kavibabyj@gmail.com';
const password = 'Kavibabyj@12';
await Login.login(email,password);

await page.waitForLoadState('load');
expect(page).toHaveTitle(/Let's Shop/);
//page.waitForTimeout('load');

//const cards = page.locator(".card")
await page.locator(".card-body b").first().waitFor();
const titles =await page.locator(".card-body b").allTextContents();
console.log(titles);
const addcart_button= await page.locator(".card-body button").nth(3).click();
//await page.pause();
//await addcart_button.click();
//await page.locator('li button:has-text(/Cart/)').click();
await page
  .locator('li')
  .getByRole('button', { name: /Cart/ })
  .click();

  await expect (page.locator('.cartSection h3')).toHaveText('ZARA COAT 3');
    await page.getByRole('button', {name:'Checkout'}).click();




})
