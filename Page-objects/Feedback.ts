import { expect,Locator,Page } from "@playwright/test";

export class FeedbackForm
{
    
     readonly page:Page
    readonly inputName:Locator
    readonly inputEmail:Locator
    readonly inputSubject:Locator
    readonly inputComment:Locator
    readonly resetButton:Locator
    readonly submitButton:Locator


    //constructor
    constructor (page:Page)
    {
        this.page=page
        this.inputName=page.locator('#name')
        this.inputEmail=page.locator('#email')
        this.inputSubject=page.locator('#subject')
        this.inputComment=page.locator('#comment')
        this.resetButton=page.locator("input[name='clear']")
        this.submitButton=page.locator("input[type='submit']")
    }
    async fillForm(inputNamev:string, inputEmailv: string,inputSubjectv: string,inputCommentv: string )
    {
await this.inputName.type(inputNamev)
await this.inputComment.type(inputCommentv)
await this.inputEmail.type(inputEmailv)
await this.inputSubject.type(inputSubjectv)
    }
    async resetForm()
    {
      await  this.resetButton.click()
    }
    async SubmitForm()
    {
        await this.submitButton.click()
    }

}