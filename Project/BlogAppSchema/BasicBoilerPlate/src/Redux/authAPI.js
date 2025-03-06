

import authservice from "../Appwrite/Auth";


import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser=createAsyncThunk('user/createuser',async({username,email,password})=>{
    try {
     
       let newUser=await authservice.createaccount({username,email,password})
        if(newUser)
        return newUser
        else
        return false
    } catch (error) {
        return error
    }
})


export const fetchUSer=createAsyncThunk('user/fetchuser',async()=>{
    let user=await authservice.getCurrentUser()
   return user
})


export const Login=createAsyncThunk('user/login',async({email,password})=>{
    try{
      let user=await authservice.Login({email,password})
      console.log(user)
    if(user)
        return user
    else
    return false
    }catch(err)
    {
        console.log(err)
        return false
    }
  
}) 



export const Logout=createAsyncThunk('user/logout',async()=>{
    try{
    let logoutSession = await authservice.Logout()
    return logoutSession
    }catch(err){
        return Error('Error in Logonut Operation')
    }
 
})







