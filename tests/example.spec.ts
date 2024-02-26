import { test, expect} from '@playwright/test'
import exp from 'constants';
import {assertTitle, loadHome} from '../helpingfs'



test('Simple basic test2 @myTag', async ({page})=>{
    await page.goto('http://www.example.com')
    const pagetitle= await page.locator('h1')
    await expect(pagetitle).toContainText('Domain')
    
    })

test ('Check clicking on element',async ({page})=>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('text=Sign in')

    const errorMessage=await page.locator('.alert-error');
    await expect(errorMessage).toContainText('wrong')

})
test.describe('my suite',()=>
{

test("working with inputs", async ({page})=>
{
    
    await page.click('#signin_button')
    await page.type('#user_login', 'some value')
await page.type('#user_password','passwword')
await page.click('text=Sign in')
await page.screenshot({path:'screenshot.png',fullPage:true})
const errorMessage=await page.locator('.alert-error');
await expect(errorMessage).toContainText('wrong')
})

test('Assertions @myTag',async ({page})=>
{
    await page.goto('https://example.com/')
    await expect(page).toHaveURL('https://example.com/')
    await expect(page).toHaveTitle('Example Domain')
const element =await page.locator('h1')
await element.screenshot({path:'screenshot2.png'})
await expect(element).toHaveText("Example Domain")
await expect(element).toHaveCount(1)
await expect(page.locator('h4')).not.toBeVisible()

}
)


})

test.only('custom functions', async ({page})=>{
    await loadHome(page)
    await assertTitle(page)
    }
    )