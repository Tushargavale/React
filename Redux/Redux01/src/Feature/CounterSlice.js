import {createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'


export const fetchTodo=createAsyncThunk('todo/fetchtodo',async()=>{
        let todo= await JSON.parse(localStorage.getItem('todos'))
       console.log(todo)
        if(todo && todo.length>0 )
            return todo 
        else 
        return []
    
})




const initialState={
    value:0,
   todo:[],
    status:'pending'| 'completed'
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value=state.value+1
           console.log('Dispatch is in Procgress')
        },
        decrement:(state,action)=>{
            setTimeout(() => {
            //   state=state+1
                 console.log('Value is Updated')
                
            }, 1000);
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.status='pending'
        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            let newTodo=[]
            console.log(action.payload)
           action.payload.forEach(element => {
            newTodo.push(element)
           });
            state.todo=newTodo
           state.status='completed'
         
        })
    }
})

export const {increment , decrement} =counterSlice.actions  

//console.log(counterSlice.actions)     
//console.log(counterSlice.reducer)
//dispatch(fetchTodo())


export default counterSlice.reducer