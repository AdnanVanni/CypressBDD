import {test, expect, Locator} from '@playwright/test'


export class navigationBarClass{
    readonly page
readonly accountSummaryTab:Locator
readonly AccountActivity:Locator
readonly TransferFunds:Locator
readonly PayBills:Locator


constructor (page)
{
    this.page=page

this.accountSummaryTab=page.locator('#account_summary_tab')
this.AccountActivity=page.locator('#account_activity_tab')
this.TransferFunds=page.locator('transfer_funds_tab')
this.PayBills=page.locator('#pay_bills_tab')


}

async visitPayBills()
{
   await this.PayBills.click()

}

}


/*

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
*/
