import {createSlice,current} from '@reduxjs/toolkit' 
import { getAllPost ,submitPost,updatePost } from './AsyncThunk'
import Blog from '../Blog'
const initialState={
    AllBlog:Blog,
    currentBlog:[],
    state: 'null' | 'pending' | 'success' |  'reject'
}


const BlogSlice=createSlice({
    name:'Blogs',
    initialState,
    reducers:{
        setBlog:(state,payload)=>{
            console.log(payload)
            state.currentBlog=payload.payload
            console.log(state.currentBlog)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllPost.fulfilled,(state,payload)=>{
        state.state='success'
        
        }),
        builder.addCase(getAllPost.pending,(state)=>{
           state.state='pending'
        }),
        builder.addCase(submitPost.fulfilled,(state,payload)=>{
            state.state='success'
            state.AllBlog.push(payload.payload)
          
        }),
        builder.addCase(updatePost.fulfilled,(state,payload)=>{
            console.log(payload)
            state.AllBlog.push(payload.payload)
             
        }),
        builder.addCase(submitPost.pending,(state,payload)=>{
        
            state.state='pending'
        
        }),
        builder.addCase(updatePost.pending,(state,payload)=>{
          
            state.state='pending'
         }),
         builder.addCase(submitPost.rejected,(state,payload)=>{
            state.state='reject'
          
        }),
        builder.addCase(updatePost.rejected,async(state,payload)=>{
            state.state='reject'
          
        })
    }
   
})

export const {setBlog} =BlogSlice.actions
export default BlogSlice.reducer