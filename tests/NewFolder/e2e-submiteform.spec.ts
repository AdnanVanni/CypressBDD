import {test, expect} from '@playwright/test'
import { HomePage } from '../../Page-objects/HomePage'
import { FeedbackForm } from '../../Page-objects/Feedback'

test.describe('new test suite',()=>{
let hp: HomePage
let fp: FeedbackForm

    test.beforeEach(async ({page})=>{
        hp= new HomePage(page)
        fp= new FeedbackForm(page)
    await hp.visit()
    await hp.visitFeedbackForm()
    
        
        })

    

test('Reset feedback form2',async ({page}) => {
    await fp.fillForm('1','2','3','4')
    await fp.resetForm()
    
    await expect(fp.inputName).toBeEmpty()
    

    
})

test('send feedback form2',async ({page}) => {
    await fp.fillForm('1','2','3','4')
    await fp.SubmitForm()
 
    
    

    
})
})



