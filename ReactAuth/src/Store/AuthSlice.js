import {createAction,createSlice} from '@reduxjs/toolkit'

const initialState={
    status:false,
    userData:null
}



const AuthSlice=createSlice({
   name:'Auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action.payload)
            state.status=true
            state.userData=action.payload
            console.log(state.userData)
        },

        logout:(state,action)=>{
            state.status=false,
            state.userData=null
        }

    }
})


export const {login,logout} =AuthSlice.actions

export default AuthSlice.reducer