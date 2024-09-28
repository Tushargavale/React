import {createSlice} from '@reduxjs/toolkit'  
import { fetchUSer ,loginUser ,logoutUser ,signUpUser } from './AsyncThunk'


const initialState={
    userInfo:{},
    status:false
}

export const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        loginAfterRefresh:(state,action)=>{
            state.status=true 
            state.userInfo=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUSer.rejected,(state)=>{
           state.status=false
        }),
        builder.addCase(fetchUSer.fulfilled,(state,payload)=>{
           
            state.status=true
            state.userInfo=payload
        }),
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            console.log(action.payload)
            if(action.payload)
            {
                state.status=true
                state.userInfo=action.payload
            }

        }),
        builder.addCase(logoutUser.pending,(state)=>{
            
        }),
        builder.addCase(logoutUser.fulfilled,(state,action)=>{
            state.userInfo={}
            state.status=false
        }),
        builder.addCase(signUpUser.pending,(state,action)=>{
           
        }),
        builder.addCase(signUpUser.fulfilled,(state,action)=>{
            if(action.payload)
            {
                state.userInfo=action.payload 
                state.status=true
            }else{
                state.status=false
            }
        }),
        builder.addCase(signUpUser.rejected,(state,action)=>{
            
        })


       
      

    }
})


 export const {loginAfterRefresh}=AuthSlice.actions

export default AuthSlice.reducer
