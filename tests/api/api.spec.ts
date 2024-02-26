import {test,expect} from '@playwright/test'

test.describe('API Suite',()=>
{
test('test api get request',async ({request})=> {
    const response1= await request.get('https://reqres.in/api/users/2')
const new1=response1.text()
  const responsebody= JSON.parse( await Promise.resolve(new1))
  console.log(responsebody)
  expect((await response1).status()).toBe(200)
  expect(responsebody.data.id).toBe(2)
  expect(responsebody.data.first_name).toBe("Janet")
    
   })

   test('put',async ({request})=> {
    
  
   const jsonData={
    "name": "morpheus",
    "job": "zion resident"
}
   const response= await request.put('https:reqres.in/api/users/2',{
  data:{  "name": "morpheus",
    "job": "zion resident"
       },
})
const responsebody=JSON.parse(await response.text())
expect (response.status()).toBe(200)
expect (responsebody.name).toBe('morpheus')
expect(responsebody.updatedAt).toBeTruthy()


   
   }
   )

   test('delete',async ({request})=> {
      const response1= await request.delete('https://reqres.in/api/users/2')
  
    await expect((await response1).status()).toBe(204)
    


})


test('POst',async ({request})=> {
    
  
   const jsonData={
    "name": "morpheus",
    "job": "zion resident"
}
   const response= await request.post('https:reqres.in/api/users/',{
  data:{  "name": "morpheus",
    "job": "zion resident"
       },
})
const responsebody=JSON.parse(await response.text())
await expect (response.status()).toBe(201)
await expect (responsebody.name).toBe('morpheus')
await expect(responsebody.createdAt).toBeTruthy()
await expect(responsebody.id).toBeTruthy()


   
   }
   )
})

