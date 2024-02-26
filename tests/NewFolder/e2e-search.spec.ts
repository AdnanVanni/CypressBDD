import {test, expect} from '@playwright/test'

test.describe('new test sute2',()=>{
    test("verify search",async ({page}) => {
         await page.goto('http:zero.webappsecurity.com/index.html')
         await page.type('#searchTerm','bank')
         await page.keyboard.press('Enter')
         const locater=await page.locator('li>a')
         await expect(locater).toHaveCount(2);

    })
}
)