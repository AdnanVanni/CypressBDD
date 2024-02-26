import { test, expect, Locator } from '@playwright/test'
import { payment } from '../../Page-objects/PaymentPage'
import { HomePage } from '../../Page-objects/HomePage'
import { LoginPage } from '../../Page-objects/LoginPage'
import { navigationBarClass } from '../../Page-objects/NavigationBar'

test.describe.only('new Pyament suite', () => {
  let loginPage: LoginPage
  let homePage: HomePage
  let paymentPage: payment
  let navigationBar: navigationBarClass

  test('payment test', async ({ page }) => {
    loginPage = new LoginPage(page)

    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.clickOnSignIn()

    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    navigationBar = new navigationBarClass(page)
    navigationBar.visitPayBills()
    paymentPage = new payment(page)
    await paymentPage.fillDetails()
    await paymentPage.submit()
    await paymentPage.MessageVerification()
  })
})
