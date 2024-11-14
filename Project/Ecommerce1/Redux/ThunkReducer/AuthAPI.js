import {createAsyncThunk, isRejected} from '@reduxjs/toolkit'
import axios from 'axios'






const login=async({username,password},thunkAPI)=>{
    try{
        let user=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/login`,{username,password},{
            withCredentials:true
        })
        return user.data
    }catch(err){
       return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
}



export const refreshLogin=createAsyncThunk('user/refresh-token',async(thunkAPI)=>{
    try{
        const Token=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/refresh-token`,{},{
            withCredentials:true
        })
         const user=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/current-user`,{withCredentials:true})
         if(user.status===200)
        {
          return user.data
        }else
        thunkAPI.rejectWithValue('login failed')
    }catch(err)
    {   
        console.log(err)
        return thunkAPI.rejectWithValue(err)
    }
})





export const loginUser=createAsyncThunk('user/Login',login)