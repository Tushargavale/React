const express=require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.json())
const mongoose=require('mongoose')
const { log } = require('console')
const cors=require('cors')
app.use(cors())

//const URL2='mongodb+srv://tushargavale:T@123ushar@cluster0.ygemlos.mongodb.net/'
const URL="mongodb+srv://tushargavale:T%40123ushar@cluster0.ygemlos.mongodb.net/"

const TodoSchema=new mongoose.Schema({
    Activity:String,
    startTime:Number,
    endTime:Number,
    date:String,
    priority:String 
})






mongoose.connect(URL,{dbName:'ToDo'})

const login=mongoose.model('ToDo',TodoSchema)




const add=async(req,resp)=>{
    let NewTodo=req.body 
    console.log(NewTodo)
    let todo=new login(NewTodo)
    await todo.save()
    resp.status(200).send({message:"Done"})
}

const show=async(req,resp)=>{
   let All=await login.find({})
   resp.status(200).json(All)
}

const edit=async(req,resp)=>{
    let _id=req.body._id
    console.log(req.body)
    let N=await login.findOneAndUpdate({_id},req.body)
   
    resp.status(200).send(N)
}

const remove=async(req,resp)=>{
   // let _id=req.body._id
   console.log(req.query._id)
   let _id=req.query._id
   console.log(_id)
    let Updated=await login.findOneAndDelete({_id})
    let All=await login.find({})
    resp.status(200).send(All)
}


// app.post('/add',add)
// app.get('/show',show)
// app.post('/edit',edit)
// app.delete('/delete',remove)
app.post('login',)


app.get('/',(req,resp)=>{resp.send('Server is Started Successfully here , Welcome To ToDo App')})
app.listen(3000,console.log('Server is Running on LocalHost 3000'))