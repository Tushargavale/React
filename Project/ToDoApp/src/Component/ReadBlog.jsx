import React, { useEffect, useState } from 'react'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'


function ReadBlog() {
const navigate=useNavigate()
const blog=useSelector((state)=>state.Blogs.currentBlog)
const user=useSelector((state)=>state.Auth.userInfo.username)
const [editable,setEditable]=useState(false)
const [state,setState]=useState()

useEffect(()=>{
  console.log(user)
    console.log(blog)
  if(user===blog.user)
  {
  
    setEditable(true)
  }
setState(blog)
},[blog])




const Edit=()=>{
   navigate(`/Edit/${blog.slug}`)
}



  return (
    <>
   {state?<>
    <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{state.title}</h1>
                <h2 className="text-2xl text-gray-600 mb-4">{state.slug}</h2>
                <div className="prose prose-lg text-gray-700 text-left">
                    {parse(state.content)}
                </div>
          {editable?<>
          
          <div className="flex justify-end mt-6">
                    <button 
                        onClick={Edit} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Edit
                    </button>
                </div>
          
          </>:<>
          <h1>No Edit</h1>
          </>}
             
           </div>
        </div>
   </>:<h1>Loading</h1>}
   
    </>
  )
}

export default ReadBlog