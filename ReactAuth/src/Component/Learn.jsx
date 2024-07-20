import { useEffect ,useState } from "react"
import React  from 'react'
import {useNavigate} from 'react-router-dom'
import {getDoc} from '../Api/API.js'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from "../Store/AuthSlice.js"
function Learn() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
   
    const [post,setPost]=useState('not set Yet')
    const [user,setUser]=useState(useSelector((state)=>state.Auth))
  //  setUser(useSelector((state)=>state.Auth.userData))
    useEffect(()=>{
       
        
        const getDocument=async()=>{
            // console.log(user)
            const Resp=await getDoc(user)

            console.log(Resp)
            if(!Resp)
            {
            console.log(Resp)
            dispatch(logout())
            localStorage.removeItem('user')
             navigate('/')   
            }
            else{
                setPost('Post is Selectred')
            }
        }
        if(user.status)
            getDocument()
    },[user])



  return (
   <>
   
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8 md:mt-16">
      <h2 className="text-xl font-bold mb-4 text-gray-800">What is React?</h2>
      <p className="text-gray-700">
        React is a JavaScript library for building user interfaces. It lets you create reusable UI 
        components that manage their own state. React efficiently updates and renders the right components
        when your data changes. It is maintained by Facebook and a community of developers.
        React uses a virtual DOM to optimize rendering performance. It is widely used in web
        development to build fast, interactive, and modern web applications.
      </p>
      {post}
    </div>
   
   </>
  )
}

export default Learn