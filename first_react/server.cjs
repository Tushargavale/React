const express=require('express')
let app=express()
let bodyparser=require('body-parser')
let CORS=require('cors')
app.use(bodyparser.json())
app.use(CORS())



let USER=[]


let counter=10;

app.get('/data',(req,resp)=>{
   
    resp.send(USER)
})

app.post('/add',(req,resp)=>{
    let D=req.body
    USER.push(D)

    resp.send(USER)
    
})
function deleted(data)
{
    console.log(data+"   FRom DELETED FUNCTION")
    for(let i=0;i<USER.length;i++)
    {
        if (USER[i].Name === data.Name) {
            USER.splice(i, 1); // Use splice to remove the element
            break; // Exit the loop once the element is found and removed
        }
    console.log(USER)
    }
}



app.post('/delete',(req,resp)=>{
    let data=req.body
    console.log(USER.length)
    deleted(data)
    console.log('Data is Deleted From USER')
    resp.send("DATA IS DELETED")
})



app.listen('3000',console.log('server is Runing on Port 3000'))