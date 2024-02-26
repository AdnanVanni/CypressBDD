 import { test, expect} from '@playwright/test'



test.describe('transfer funds',()=>{
    //negative scenario
    test.beforeEach(async ({page})=>{
await page.goto('http://zero.webappsecurity.com/index.html')
await page.click('#signin_button')
await page.type('#user_login', 'username')
await page.type('#user_password','password')
        await page.click('text=Sign in')
        
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    })
test("actual method",async ({page}) => {
    await page.selectOption('#tf_fromAccountId','2')
    await page.selectOption('#tf_toAccountId','4')
    await page.type('#tf_amount','200')
    await page.type('#tf_description','200 dollars transfered to him')
    await page.click('#btn_submit')
    const boardHeader=await page.locator('h2.board-header')
    await expect(boardHeader).toContainText('Verify')
    await page.click('#btn_submit')
    const message=await page.locator('.alert-success')
    await expect(message).toContainText('You successfully')

    
})
test("Verify table values",async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
    
    await page.selectOption('#aa_accountId','2')
    const val= page.locator('#all_transactions_for_account tbody>tr')
    await expect(val).toHaveCount(3)
    await page.selectOption('#aa_accountId','3')
    const val3= page.locator('#all_transactions_for_account tbody>tr')
    await expect(val3).toHaveCount(3)


})
test("Verify pay",async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
    
await page.selectOption("#sp_payee",'apple')
await page.click('#sp_get_payee_details')
 const valuee=await page.locator('#sp_payee_details')
await expect(valuee).toHaveText('For 48944145651315 Apple account')
await page.selectOption("#sp_account",'3')
await page.type('#sp_amount','3')
await page.type('#sp_date','2023-08-03')
await page.type('#sp_description','2023-08-03 dated transaction added')
await page.click('#pay_saved_payees')
const sucessmsg=page.locator('#alert_content>span')
await expect(sucessmsg).toHaveText('The payment was successfully submitted.')


})

test.only("Currency exchange",async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
    
    await page.click('#tabs li:nth-child(3)')
await page.selectOption("#pc_currency",'DKK')
const sellRateText=await page.locator('#sp_sell_rate')
await expect(sellRateText).toHaveText('1 krone (DKK) = 0.1863 U.S. dollar (USD)')
await page.type('#pc_amount','3')
await page.click('#pc_inDollars_false')
await page.click('#pc_calculate_costs')

const conversion=await page.locator('#pc_conversion_amount')

await expect(conversion).toHaveText('3.00 krone (DKK) = 0.56 U.S. dollar (USD)')
await page.click('#purchase_cash')
const successmsg=await page.locator('#alert_content')
await expect(successmsg).toHaveText('Foreign currency cash was successfully purchased.')


})
})