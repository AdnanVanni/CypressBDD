import {test, expect} from '@playwright/test'


test.describe.only('new visual suite', ()=>
{
    test('full page screenshot',async ({page}) => {
        await page.goto('https://www.google.com')
        
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })
    test('specific element screenshot',async ({page}) => {
        await page.goto('https://www.google.com')
        const pageElement=await page.locator('.lnXdpd')
        expect(await pageElement.screenshot()).toMatchSnapshot('google2.png')
        
    })
})


