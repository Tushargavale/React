import { createSlice ,asyncThunkCreator ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    loading:false,
    userinfo:{
        username:'',
        password:''
    },
    userToken:null,
    error:null,
    success:false,
    state:'success' |  'pending' | 'fail'
    
}




async function storeObjectInLocalStorage(key, obj) {
 return new Promise((resolve, reject) => {
    try {
      // Convert the object to a JSON string
      const jsonString = JSON.stringify(obj);

      // Store the JSON string in localStorage
      localStorage.setItem(key, jsonString);

      console.log(`Object stored under key<><>: ${key}`);
      resolve();
    } catch (error) {
      console.error('Error storing object in localStorage:', error);
      reject(error);
    }
  });
}

function retrieveObjectFromLocalStorage(key) {
  return new Promise((resolve, reject) => {
    try {
      // Retrieve the JSON string from localStorage
      const jsonString = localStorage.getItem(key);

      // Parse the JSON string back into an object
      const obj = JSON.parse(jsonString);

      if (obj === null) {

       resolve('null')
      }

    //   console.log(`Object retrieved from key: ${key}`);
      resolve(obj);
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
      reject(error);
    }
  });
}











export const LoginUser=createAsyncThunk('UserSlice/Login',async()=>{
   
        try{
            let Resp= await axios.get('http://localhost:3000/Login') 
            await storeObjectInLocalStorage('user',Resp.data)
           // console.log(Resp)
            return Resp.data
        }catch(e){

        }
})



export const FetchData=createAsyncThunk('userSlice/FetchData',async()=>{
    try{
  let user=await retrieveObjectFromLocalStorage('user')
    }catch(err)
    {
        return err
    }
  
    
})


export const VerifyUser=createAsyncThunk('userSlice/VerifyUser',async(id=null,thunkAPI)=>{
    
try{
  let state=thunkAPI.getState()
  let user=state.User.userToken   
 
  if(user!=null)
    {
      return user
    }else
 {
  console.log('before retrive localstor')
    let user=await retrieveObjectFromLocalStorage('user')
    console.log('afetr rerive localstorage')
    console.log(user)
    if(user===null || user==='null' ){

      return null
    }
    else
    return user
  }

  
}catch(err)
{
  console.log('We got Error')
  console.log(err)
  return err
}
 

})


















export const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
      setUser:(state,action)=>{
        console.log(action.payload)
        state.userToken=action.payload.Token
      },
      logoutUser:(state,action)=>{
        state.userToken==null
        console.log('User Logout Succeddfulluy')
      }

    },
    extraReducers:builder=>{
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.userinfo.username=action.payload.username
            state.userinfo.password=action.payload.password
            state.userToken=action.payload.Token
            state.state='success'
        }),
        builder.addCase(VerifyUser.fulfilled,(state,action)=>{
          console.log(action.payload)
          if(action.payload===null){
           console.log('before state'  , state.state)
            state.state='fail'
            console.log('after state ',state.state)
          }
          
          else{
          state.state='success'
          state.userToken=action.payload.Token
          }
         
        }),
        builder.addCase(VerifyUser.pending,(state,action)=>{
          console.log('Pending STATE')
        state.state='pending'
        })
        ,
        builder.addCase(VerifyUser.rejected,(state,action)=>{
          state.state='fail'
        })

        
    }
  
})
export const {setUser,logoutUser} =UserSlice.actions
export default UserSlice.reducer