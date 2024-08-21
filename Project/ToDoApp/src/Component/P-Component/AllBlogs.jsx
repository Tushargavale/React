import React, { useEffect, useState } from 'react'
import {Query} from 'appwrite'
import BlogCard from '../../Pages/BlogCard'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser,getAllPost} from '../../Redux/AsyncThunk'

// function AllBlogs({post}) {
function AllBlogs(){
const dispatch=useDispatch()
const [post,setPost]=useState([])
const blogs=useSelector((state)=>state.Blogs)
const userID=useSelector((state)=>state.Auth.userInfo.$id)

//Query.or([Query.equal('option','public'),Query.equal('userID','userID')])
    useEffect(()=>{
        let queries=[Query.or([Query.equal('option','public'),Query.equal('userID',userID)])]
       dispatch(getAllPost(queries))
     
    },[])
    // dispatch(getAllPost())
    useEffect(()=>{
      
        if(blogs.state=='success')
        {
            if(blogs.AllBlog.length>0)
            setPost(blogs.AllBlog)
          
        }
    },[blogs])




  return (
  <>
   <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center">
                {/* {post.length>0?<>
                
                
                </>:<></>} */}
                {   post.map((blog, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <BlogCard
                            title={blog.title}
                            slug={blog.$id}
                            content={blog.content}
                            option={blog.option}
                            user={blog.userID}
                        />
                    </div>
                ))}
            </div>
        </div> 
  
  </> 
  )
}

export default AllBlogs