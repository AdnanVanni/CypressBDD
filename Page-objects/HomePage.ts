import { expect,Locator,Page } from "@playwright/test";

export class HomePage{
    readonly page:Page
    readonly signInButton:Locator
    readonly feedbackButton: Locator


    constructor(page:Page){
this.page=page
this.signInButton=page.locator("#signin_button")
this.feedbackButton=page.locator('#feedback')
    }


    async visit()
    {
      await this.page.goto('http://zero.webappsecurity.com/')  
    }
    async visitFeedbackForm()
    {
        await this.feedbackButton.click()
    }
     async clickOnSignIn(){
            await this.signInButton.click()

        }
        
    }
