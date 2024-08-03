import React, { useEffect } from 'react'
import PostForm from '../Component/P-Component/PostForm'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'

function EditBlog() {
    const param=useParams()
    const blog=useSelector((state)=>state.Blogs.currentBlog)
    useEffect(()=>{
        console.log(blog)
        console.log(param)
    },[param,blog])

  return (
   <>
   <PostForm post={blog} type='update' ></PostForm>
   </>
  )
}

export default EditBlog