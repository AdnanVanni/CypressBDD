import { test, expect, defineConfig} from '@playwright/test'

/*const people=['Ahmed','him', 'got it']
for(const name of people)
{
    test(`testing array of ${name}`,async ({page}) => {
        console.log('$name')
        await page.goto("https://www.google.com")
     await page.locator('#APjFqb').type(name)
     
     await page.keyboard.press('Enter')
     await page.waitForTimeout(3000)
    
    })
    
}

test("multiple page",async ({browser}) => {
    const context= await browser.newContext()
    const page1=await context.newPage()
    const page3=await context.newPage()
    const page2=await context.newPage()
     await page1.goto('https://www.google.com')
     await page2.goto('https://www.google.com')
     await page3.goto('https://www.google.com')
    
})
*/
const dm = 40;

//for (let i = 1; i <= dm; i++) {

/*test(`Execute script multiple ${i} times`, async ({ page }) => {
    await page.goto('https://qa.donate.cancer.org/resendcards');
    await page.getByRole('combobox').selectOption('memory');
    await page.locator('input[name="honor_fname"]').click();
    await page.locator('input[name="honor_fname"]').fill('aa');
    await page.locator('input[name="honor_lname"]').click();
    await page.locator('input[name="honor_lname"]').fill('bb');
    await page.locator('input[name="donor_firstName"]').click();
    await page.locator('input[name="donor_firstName"]').fill('aa');
    await page.locator('input[name="donor_lname"]').fill('b');
    await page.locator('input[name="donor_lname"]').click();
    await page.locator('input[name="donor_lname"]').fill('bb');
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill('adnan.ali@cancer.org');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
  });

  };
  */


  test('test1',async ({page}) => {
    await page.goto('https://qa.donate.cancer.org/resendcards');

    await page.getByRole('combobox').selectOption('memory'); 
    for (let i = 1; i <= dm; i++)
    {
       
        await page.waitForTimeout(20000);
        await page.locator('input[name="honor_fname"]').click();
        await page.locator('input[name="honor_fname"]').fill('aa');




    }
    
  })
