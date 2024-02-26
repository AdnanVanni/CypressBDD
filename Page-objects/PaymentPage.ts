import {test, expect, Locator} from '@playwright/test'


export class payment{
    readonly page
readonly spAccountFor:Locator
readonly getPayeeDetails:Locator
readonly shortMessagePayee:Locator
readonly selectOptionForAccount:Locator
readonly spAccountTo:Locator
readonly amount:Locator
readonly date:Locator
readonly desc:Locator
readonly payButton:Locator
readonly messageTextLocator:Locator

constructor (page)
{
    this.page=page
this.spAccountFor= page.locator('#sp_payee')
this.getPayeeDetails=page.locator('#sp_get_payee_details')
this.shortMessagePayee=page.locator('#sp_payee_details')
this.selectOptionForAccount=page.locator('sp_account')
this.spAccountTo=page.locator('#sp_account')
this.amount=page.locator('#sp_amount')
this.date=page.locator('#sp_date')
this.desc=page.locator('#sp_description')
this.payButton=page.locator('#pay_saved_payees')
this.messageTextLocator=page.locator('#alert_content>span')

}

async fillDetails()
{
    await this.spAccountFor.selectOption('apple')
    await this.getPayeeDetails.click()
    await this.spAccountTo.selectOption('3')
    await this.amount.type('3')
    await this.date.type('2023-08-03')
    await this.desc.type('testdesc')

}
async submit(){
    await this.payButton.click()
}
async MessageVerification()
{
    await expect(this.messageTextLocator).toHaveText('The payment was successfully submitted.')
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