import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser ,refreshLogin } from "../ThunkReducer/AuthAPI";




const initialState={
    name:"",
    user:{},
    status:false,
    role:''
    
}

export const userSlice=createSlice({
    initialState,
    name:"user",
    reducers:{
        getUser:(state)=>{
       //     console.log('getUSer')
        },
        logOut:(state)=>{
            state.name=""
            state.role=""
            state.status=false
            state.user={}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.status=true 
            state.user=action.payload.data.user
            state.role=action.payload.data.user.role
            console.log(state.role,state.user)
        }),
        builder.addCase(loginUser.rejected,(state,action)=>{
           state.status=false
        }),
        builder.addCase(loginUser.pending,(state,action)=>{
            console.log('Action is in Pending.')
        }),
        builder.addCase(refreshLogin.fulfilled,(state,action)=>{
       //     console.log(action.payload)
            state.status=true 
            state.user=action.payload.data
            state.role=action.payload.data.role
        }),
        builder.addCase(refreshLogin.rejected,(state,action)=>{
            state.status=false
        }),
        builder.addCase(refreshLogin.pending,(state)=>{

        })
    }
})

export const {getUser,logOut} =userSlice.actions
export default userSlice.reducer