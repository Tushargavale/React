// const express = require('express');
const app = express();
import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET"],
    credentials:true
}));
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser())

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// Define Middeleware 

const AuthenticateMW=(req,resp,next)=>{

}


const Login=(req,resp)=>{
    let {username,password}=req.body 
    console.log({username,password})
    resp.cookie('AuthToken',"THIS IS TOKEN STRING>>>>")
    resp.send('Login SUccess')
}


const GetUser=(req,resp)=>{
  // console.log(req)
  let cookie=req.cookies
   console.log(cookie)
    resp.send('USer GOT')
}



app.post('/Login',Login)
app.post('/GetUser',GetUser)




// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
