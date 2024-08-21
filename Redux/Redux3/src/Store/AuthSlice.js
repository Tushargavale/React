import {createSlice} from '@reduxjs/toolkit'


let initialState={
    status:false,
    userData:null
}


const AuthSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            console.log(action.payload)
            state.userData=action.payload
        },
        logout:(state)=>{
            state.status=false,
            state.userData=null
        }



    }
})



export const {login,logout} =AuthSlice.actions

export default AuthSlice.reducer