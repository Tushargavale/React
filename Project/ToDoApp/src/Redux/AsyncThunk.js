import {createAsyncThunk} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import Blog from '../Blog'
import authservice from '../../Appwrite/Auth'




export const fetchUSer=createAsyncThunk('Auth/fetchUser',async()=>{



})

export const loginUser=createAsyncThunk('Auth/loginUser',async(payload)=>{
    try {
        console.log(payload)
        return {state:true,data:{"name":"Tushar"}}
    } catch (error) {
        console.log(error)
        return false
    }
})



export const logoutUser=createAsyncThunk('Auth/logoutUser',async()=>{
        try {
            return true
        } catch (error) {
            
        }
})   


export const signUpUser=createAsyncThunk('Auth/signUpUser',async(payload)=>{
    try {
       
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
    // console.log('Reached to ASYBC Tuuun ')
    return Blog
})   


// export const updatePost=createAsyncThunk('Blogs/updatePost',async(payload)=>{
//     console.log('asyn thunk')
// try{
  
//     console.log('Ipdate iosk')
   
//     return Promise.resolve(payload)
// } catch (error) {
//     console.log(error)
//     console.log('promise is rejected in EDIT BLOG.js')
//     return Promise.reject(false)
// }  
// })


export const updatePost=createAsyncThunk('Blogs/updatePost',async(payload,thunkAPI)=>{
  
   try {
    return payload
   } catch (error) {
    console.log('REEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
    return false
   }
})





export const submitPost=createAsyncThunk('Blogs/submitPost',async(payload)=>{
   try {
    return Promise.resolve(payload)
   } catch (error) {

    return Promise.reject(false)
   }
})