import {createSlice ,createAsyncThunk } from '@reduxjs/toolkit' 

const initialState={
    theame:'bg-black'
}   

export const getTheme=createAsyncThunk('theme/fetchTheme',async()=>{
      new Promise((resolve, reject) => {
        try {
            const value = localStorage.getItem(key);
            if(value){
                
                console.log('22')
                resolve(value)
            }
              else 
        resolve('NOT RESOLVED')
        } catch (error) {
            reject(error);
        }
    });
})


export const ThemeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
          
            if(state.theame=='bg-white')
                state.theame='bg-black'
            else
            state.theame='bg-white'
   
        },
        
    },
    extraReducers:builder=>{
        builder.addCase(getTheme.fulfilled,(state,action)=>{
            console.log('***************')
            console.log(action.payload)
        })
        
    }
   

})

export const {changeTheme} =ThemeSlice.actions 
export default ThemeSlice.reducer