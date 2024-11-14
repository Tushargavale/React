import axios from "axios";
import {createAsyncThunk, isRejected} from '@reduxjs/toolkit'



export const getAllProducts=createAsyncThunk('products/getAllProducts',async({page=1,limit=15},thunkAPI)=>{
    try{
       
   //     console.log(page,limit)
        const Response=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/ecommerce/products`,{
            params: {
                page,   // Query parameter for page
                limit,  // Query parameter for limit
              }
        })
       // return "DONE"
      //  console.log(Response.data)
         if(Response.status===200)
        {
           return Response.data
        }else
        thunkAPI.rejectWithValue('Request Failed..')
    }catch(err)
    {   
        console.log(err)
        return thunkAPI.rejectWithValue(err)
    }
})

