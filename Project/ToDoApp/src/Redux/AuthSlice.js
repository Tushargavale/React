import {createSlice} from '@reduxjs/toolkit'  
import { fetchUSer ,loginUser ,logoutUser ,signUpUser } from './AsyncThunk'


const initialState={
    userInfo:{},
    status:false
}

export const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUSer.rejected,(state)=>{
           state.status=false
        }),
        builder.addCase(fetchUSer.fulfilled,(state,payload)=>{
            console.log('ful')
            state.status=true
            state.userInfo=payload
        }),
        builder.addCase(loginUser.fulfilled,(state,payload)=>{
            console.log(payload)
        if(payload.payload.state)
            {
                console.log(payload.state)
                state.status=true  
                state.userInfo.username='admin'
               // state.userInfo=payload.data
            }else{
                state.status=false
                state.userInfo={}
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

        }),
        builder.addCase(signUpUser.rejected,(state,action)=>{
            
        })


       
      

    }
})


// export const {fetchUSer,loginUser}=AuthSlice.actions

export default AuthSlice.reducer
