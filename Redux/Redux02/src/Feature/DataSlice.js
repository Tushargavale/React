import { createSlice ,asyncThunkCreator ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    loading:false|true,
    data:null
    
}






function retrieveObjectFromLocalStorage(key) {
  return new Promise((resolve, reject) => {
    try {
      // Retrieve the JSON string from localStorage
      const jsonString = localStorage.getItem(key);

      // Parse the JSON string back into an object
      const obj = JSON.parse(jsonString);

      if (obj === null) {
        throw new Error(`No data found under key: ${key}`);
      }

    //   console.log(`Object retrieved from key: ${key}`);
      resolve(obj);
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
      reject(error);
    }
  });
}











export const FetchData=createAsyncThunk('DataSlice/FetchData',async()=>{
        console.log('LoginUSer UFn')
        try{
             let user=await retrieveObjectFromLocalStorage('user')
            let Resp= await axios.get('http://localhost:3000/Data',{headers:{
               'Authorization': `${user.userToken}`
            }}) 
           
            console.log(Resp)
            return Resp.data
        }catch(e){

        }
})




















export const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{

    },
    extraReducers:builder=>{
        builder.addCase(FetchData.fulfilled,(state,action)=>{
            console.log(action.payload)
           
        })
        
    }
  
})


export default dataSlice.reducer