import { test, expect} from '@playwright/test'
import { LoginPage } from '../../Page-objects/LoginPage';
import { HomePage } from '../../Page-objects/HomePage';





test.describe(()=>{
   
let loginPage:LoginPage
let homePage:HomePage

    test.beforeEach(async ({page}) => {
         loginPage= new LoginPage(page)
       
       homePage=new HomePage(page)
await homePage.visit()

    
    })
    //negative scnenario
    test('login neg', async ({page})=>{
      await homePage.clickOnSignIn()
       await loginPage.login('invalid username', 'invalid password')
       await loginPage.assertErrorMessage()
        })

//postive scenario
        test('login postivenp', async ({page})=>{
            await homePage.clickOnSignIn()
            await loginPage.login('username', 'password')
       
        
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
     
        const accounttab= await page.locator('#account_summary_tab')
        await expect(accounttab).toBeVisible()
            })
            

        


           
        
}

)
