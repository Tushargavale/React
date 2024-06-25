import {createSlice ,createAsyncThunk } from '@reduxjs/toolkit' 

const initialState={
    theame:'bg-black'
}   




export const ThemeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
          
            if(state.theame=='bg-white')
                state.theame='bg-black'
            else
            state.theame='bg-white'
   
        }
    },
   

})

export const {changeTheme} =ThemeSlice.actions 
export default ThemeSlice.reducer