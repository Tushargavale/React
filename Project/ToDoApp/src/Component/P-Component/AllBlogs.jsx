import React, { useEffect, useState } from 'react'
// import Arr from '../../Blog'
import BlogCard from '../../Pages/BlogCard'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser,getAllPost} from '../../Redux/AsyncThunk'

// function AllBlogs({post}) {
function AllBlogs(){
const dispatch=useDispatch()
const [post,setPost]=useState([])
const blogs=useSelector((state)=>state.Blogs)

    useEffect(()=>{
       dispatch(getAllPost())
     
    },[])
    // dispatch(getAllPost())
    useEffect(()=>{
        console.log(blogs)
        if(blogs.state=='success')
        {
            setPost(blogs.AllBlog)
            console.log(blogs)
        }
    },[blogs])




  return (
  <>
   <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center">
                {post.map((blog, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <BlogCard
                            title={blog.title}
                            slug={blog.slug}
                            content={blog.content}
                            option={blog.option}
                            user={blog.user}
                        />
                    </div>
                ))}
            </div>
        </div> 
  
  </> 
  )
}

export default AllBlogs