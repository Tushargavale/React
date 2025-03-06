import { createSlice } from "@reduxjs/toolkit";
import { fetchUSer,Login,Logout,createUser } from "./authAPI";
const initialState={
    user:{},
    status:false
}


export const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        getuser:(state)=>{
            console.log(state)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUSer.fulfilled,(state,action)=>{
            console.log(action)
            if(action.payload){
                state.user=action.payload
                state.status=true
            }
        }),
        builder.addCase(fetchUSer.pending,(state,action)=>{
            // state.status='pending'
            state.user={}
        }),
        builder.addCase(fetchUSer.rejected,(state,action)=>{
            state.status=false
            console.log('Login is rejected')
        }),

        builder.addCase(Login.fulfilled,(state,action)=>{
          if(action.payload)
            {
            state.status=true
            state.user=action.payload
            } 
        })

        builder.addCase(Login.rejected,(state,action)=>{
            state.status=true
            state.user=action.payload
        }),


        builder.addCase(Logout.fulfilled,(state,payload)=>{
            state.status=false 
            state.user={}
        }),
    
         builder.addCase(createUser.fulfilled,(state,action)=>{
            if(action.payload)
            {
                console.log(action)
                state.status=true
                state.user=action.payload
            }
         })

        builder.addCase(createUser.rejected,(state,action)=>{
         if(action.payload)
            {
            state.status=true 
            state.user=action.payload
            }else
            {
                state.status=false
                state.user={}
            }
        })


    
    
    }
    
})





export const {getuser}=userSlice.actions

export default userSlice.reducer












