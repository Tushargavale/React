const express=require('express')
let app=express()
let bodyparser=require('body-parser')
let CORS=require('cors')
app.use(bodyparser.json())
app.use(CORS())

let obj={
    id:"manoj",
    Pass:"manoj@123"
}


let USER=[]
USER.push(obj)
    app.post('/login',(req,resp)=>{
    let Data=req.body
    // if(Data.id=="tusahr@123" &&  Data.pass == "T@123ushar" )
    // {
    //     USER.push(Data)
    //     resp.send('LOGIN')
    // }else{
    //         resp.send('WRONG')
    // }
        console.log(Data)
        USER.push(Data)
        console.log('Visited')
    resp.send(USER)
    
})




app.listen('3000',console.log('server is Runing on Port 3000'))