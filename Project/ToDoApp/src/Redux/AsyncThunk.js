import {createAsyncThunk} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import Blog from '../Blog'
import authservice from '../../Appwrite/Auth'
import DBService from '../../Appwrite/DBConfig'



export const fetchUSer=createAsyncThunk('Auth/fetchUser',async()=>{



})

export const loginUser=createAsyncThunk('Auth/loginUser',async(payload)=>{
    try {
        console.log(payload)
        // return {state:true,data:{"name":"Tushar"}}
        const user=await authservice.Login(payload)
        console.log( "Thsi si LOGIN FUN RESP " ,user)
        return user

    } catch (error) {
         console.log(error)
        return false
    }
})



export const logoutUser=createAsyncThunk('Auth/logoutUser',async()=>{
    console.log('Dispatch Logout')
        try {
           await authservice.Logout()
            return true
        } catch (error) {
            
        }
})   


export const signUpUser=createAsyncThunk('Auth/signUpUser',async(payload)=>{
    try {
       console.log(payload)
       const Resp=await authservice.createaccount(payload) 
       if(Resp)
        return Resp  
       else 
       return false
    } catch (error) {
        return false
    }
})  


//#########################################################################
//
//      Blog's Thunk
//
//
//#########################################################################


export const getAllPost=createAsyncThunk('Blogs/getAllPost',async(payload)=>{
    try {
        const posts=await DBService.getAllPost(payload)
    return posts
    } catch (error) {
        return error
    }
    
})   





export const updatePost=createAsyncThunk('Blogs/updatePost',async(payload,thunkAPI)=>{
  
   try {
    const resp=await DBService.updatePost(payload)
    console.log(resp)
    return payload
   } catch (error) {
     return false
   }
})





export const submitPost=createAsyncThunk('Blogs/submitPost',async(payload)=>{
   try {
    const resp=await DBService.createPost(payload)
    return resp
   } catch (error) {

    return Promise.reject(false)
   }
})