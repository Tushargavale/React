import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:0
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value=state.value+1
            console.log(action)
        },
        decrement:(state,action)=>{

        }
    }
})

export const {increment} =counterSlice.actions  

console.log(counterSlice.actions)     
 console.log(counterSlice)





export default counterSlice.reducer