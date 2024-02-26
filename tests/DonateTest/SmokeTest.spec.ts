import {test, expect} from '@playwright/test'
 // Function to modify the payload
 function modifyPayload(payload) {
  const data = JSON.parse(payload);
  // Assuming the payload is JSON and has a 'firstName' field
  if (data.variables.input.creditCard.firstName) {
    // Add an emoji to the beginning of the first name
    data.variables.input.creditCard.expirationMonth='03';
    data.variables.input.creditCard.billingAddress.firstName = '😊' +'1'+ data.firstName;
  }
  return data;
}

test.describe('Corporate Form validation',()=>{
    test.only('test', async ({ page }) => {
     
        await page.goto('https://qa.donate.cancer.org/corporate');
        //await page.locator('div').filter({ hasText: /^Amount\$5\$10\$15\$20$/ }).getByPlaceholder('Enter Donation Amount').click();
       // await page.locator('div').filter({ hasText: /^Amount\$5\$10\$15\$20$/ }).getByPlaceholder('Enter Donation Amount').fill('10');
        await page.getByPlaceholder('Business/Organization').click();
        await page.getByPlaceholder('Business/Organization').fill('bjs');
        
        await page.frameLocator('iframe[name="braintree-hosted-field-number"]').getByPlaceholder('Credit Card Number').click();
        await page.frameLocator('iframe[name="braintree-hosted-field-number"]').getByPlaceholder('Credit Card Number').fill('4111111111111111');
        await page.frameLocator('iframe[name="braintree-hosted-field-expirationMonth"]').getByLabel('Expiration Month').selectOption('02');
        await page.frameLocator('iframe[name="braintree-hosted-field-expirationYear"]').getByLabel('Expiration Year').selectOption('2025');
        await page.frameLocator('iframe[name="braintree-hosted-field-cvv"]').getByPlaceholder('CVV').click();
        await page.frameLocator('iframe[name="braintree-hosted-field-cvv"]').getByPlaceholder('CVV').fill('123');
      
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Adnan');
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill('ali');
        await page.getByPlaceholder('Last Name').press('Tab');
        await page.getByPlaceholder('Email Address').fill('adnan.ali@cancer.org');
        await page.getByPlaceholder('Email Address').press('Tab');
        await page.getByPlaceholder('Address Line 1').fill('245 g');
        await page.getByText('245 G Ave, Coronado CA').nth(1).click();
        await page.route('https://payments.sandbox.braintree-api.com/graphql',async(route,request)=>{
     route.request().url().replace('https://qa.donate.cancer.org','https://www.google.com')
    });

        await page.getByRole('button', { name: '  Donate' }).click();
        
       
        
       
        
        /*await page.getByRole('button', { name: ' View receipt' }).click();
        await page.getByText('bjs').click();
        await page.getByText('2023-10-26').click();
        await page.getByText('General').click();
        await page.getByText('$10.00', { exact: true }).click();
        await page.getByText('One Time', { exact: true }).click();
        await page.getByText('adnan ali').isVisible()
        await page.getByText('13-1788491', { exact: true }).click();
        *///await page.locator('div').filter({ hasText: /^Donation Receipt$/ }).locator('i').click();
        await page.getByText('Thank you, yashwanth. Your one time tax-deductible donation of $10.00 has been received and we\'ve emailed a copy of the receipt to adnan.ali@cancer.org.').isVisible()
       // await page.getByText('Thank you, adnan. Your one time tax-deductible donation of $10.00 has been recei').click();
      });
      test('default form Ecard', async ({ page }) => {
        await page.goto('https://qa.donate.cancer.org/');
        //await page.locator('._upgrade_graphic_cxdc0_801').click();
        await page.getByRole('button', { name: ' Monthly' }).click();
        await page.getByText('$100').click();
        await page.getByText('I want to dedicate my donation.').click();
        await page.getByLabel('Cookie banner').click();
        await page.getByText('Cookie PolicyThis website uses cookies and related technology that help the webs').click();
        await page.getByRole('combobox').selectOption('memory');
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Memory');
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill('Person');
        await page.getByRole('button', { name: 'Close' }).click();
        await page.getByLabel('I\'ll cover the processing fee. Add $5.50 to my donation to ensure my entire contribution goes towards the mission.').check();
        await page.getByText('Customize the donor name (optional)').click();
        await page.getByPlaceholder('First and last name, family name, etc.').click();
        await page.getByPlaceholder('First and last name, family name, etc.').fill('Reco Name');
        await page.getByLabel('Add my gift to the Challenge Fund.Your $105.5 donation becomes $211 with the Challenge Fund!').check();
        await page.getByRole('button', { name: ' Credit Card' }).click();

        await page.frameLocator('iframe[name="braintree-hosted-field-number"]').getByPlaceholder('Credit Card Number').click();
        await page.frameLocator('iframe[name="braintree-hosted-field-number"]').getByPlaceholder('Credit Card Number').fill('4111111111111111');
        await page.frameLocator('iframe[name="braintree-hosted-field-expirationMonth"]').getByLabel('Expiration Month').selectOption('02');
        await page.frameLocator('iframe[name="braintree-hosted-field-expirationYear"]').getByLabel('Expiration Year').selectOption('2025');
        await page.frameLocator('iframe[name="braintree-hosted-field-cvv"]').getByPlaceholder('CVV').click();
        await page.frameLocator('iframe[name="braintree-hosted-field-cvv"]').getByPlaceholder('CVV').fill('123');
        await page.frameLocator('iframe[name="braintree-hosted-field-cvv"]').getByPlaceholder('CVV').click();
        await page.locator('input[name="contact_first_name"]').click();
        await page.locator('input[name="contact_first_name"]').fill('ad');
        await page.locator('input[name="contact_last_name"]').fill('b');
        await page.locator('input[name="contact_last_name"]').click();
        await page.locator('input[name="contact_last_name"]').fill('ba');
        await page.locator('#contact_email').click();
        await page.getByPlaceholder('Email Address').click();
        await page.getByPlaceholder('Email Address').fill('adnan.ali@cancer.org');
        await page.getByPlaceholder('Address Line 1').click();
        await page.getByPlaceholder('Address Line 1').fill('247 g');
        await page.getByText('247 G and E Cir, Inwood WV').nth(1).click();
        await page.getByRole('button', { name: '  Donate' }).click();
        //await page.goto('https://qa.donate.cancer.org/receipt?id=BT_CC_QA_1oPr3ABoBDbI929');
        //await page.locator('div:nth-child(2) > img').first().click();
        await page.getByPlaceholder('Personal message').click();
        await page.getByPlaceholder('Personal message').fill('personal message 1');
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('adnan');
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill('ali');
        await page.getByPlaceholder('Last Name').press('Tab');
        await page.getByPlaceholder('Email Address').fill('adnan.ali@cancer.org');
        await page.getByRole('button', { name: ' Send E-Card' }).click();

       // await page.getByText('Copy Link URL').click();
       // await page.getByText('show', { exact: true }).click();
        
        const element = await page.getByText('Your card is on the way!');
        await expect(element !== undefined ).toBeTruthy();
        const element2 = await page.getByText('adnan ali');
        await expect(element2 !== undefined ).toBeTruthy();
        const element3 = await page.getByText('Thank you, Reco Name. Your monthly tax-deductible donation of $105.50 has been received and we\'ve emailed a copy of the receipt to adnan.ali@cancer.org.');
        await expect(element3 !== undefined ).toBeTruthy();
        await page.locator('[class="fa-solid fa-receipt"]').click()
       
        await expect(page.locator('//label[normalize-space()=\'Amount\']/following-sibling::div')).toContainText("$105.50")
        await page.locator('[class="fa-solid fa-close"]').click()
        
        
      
        
        await page.close();
      });
      test('testing whether live chat appears on different forms: Default, Corporate and Campaign', async ({ page }) => {
       await page.goto('https://qa.donate.cancer.org/');
        await page.getByRole('button', { name: 'Live Chat: Live Chat Offline' }).click();
        await expect(page.getByRole('heading', { name: 'Chat' })).toBeVisible()
        await page.getByRole('button', { name: 'Close dialog' }).click();
        //test passed as the live chat was opened and closed
        await page.goto('https://qa.donate.cancer.org/corporate');
        await page.getByRole('button', { name: 'Live Chat: Live Chat Offline' }).click();
        await expect(page.getByRole('heading', { name: 'Chat' })).toBeVisible()
        await page.getByRole('button', { name: 'Close dialog' }).click();
        //test passed as the live chat was opened and closed  
        await page.goto('https://qa.donate.cancer.org/?campaign=sprint22yash3&lang=en');
        await page.locator('[class="uiButton helpButtonEnabled"]').click();
        await expect(page.getByRole('heading', { name: 'Chat' })).toBeVisible()
        await page.getByRole('button', { name: 'Close dialog' }).click();
        //test passed as the live chat was opened and closed
      });
      

    

test.only('testa', async ({ page }) => {
  await page.goto('https://qa.donate.cancer.org/');
  //await page.frameLocator('iframe[name="__paypal_checkout_sandbox_paypal-overlay-uid_ccd110669e_mtc6ndq6ntm__"]').click()
 // const iframeebutton= await page.frameLocator('#jsx-iframe-4169d32c0f').locator('[class="paypal-logo paypal-logo-paypal paypal-logo-color-blue"]')
 //iframeebutton.click()
await page.locator("div[class^='_payment_types']>div:nth-child(4)>div").click()
//await page.locator("div[class^='_payment_types']>div:nth-child(4)>div").click()


 //await page.frameLocator("#jsx-iframe-42ebe88f9c").locator("//div[contains(@class,'_payment_types')]/div[3]/div").click();
 const popupPromise = page.waitForEvent('popup');
 await page.locator("div[class^='_payment_types']>div:nth-child(4)>div").click()
 const popuppayment = await popupPromise;

  

 // await page.locator('paypal-button-label-container').click()
 
  await popuppayment.getByPlaceholder('Email or mobile number').click();
  await popuppayment.getByPlaceholder('Email or mobile number').fill('iggy.reilly@cancer.org');
  await popuppayment.getByRole('button', { name: 'Next' }).click();
  await popuppayment.getByPlaceholder('Password').click();
  await popuppayment.getByPlaceholder('Password').fill('OhFortuna');
  await popuppayment.getByRole('button', { name: 'Log In' }).click();
  await popuppayment.getByTestId('submit-button-initial').click();
  await popuppayment.goto('https://qa.donate.cancer.org/receipt?id=BT_PP_QA_i89A78e3534x6O9');
});
}
)



