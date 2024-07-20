

import React from 'react'
import {useForm  } from 'react-hook-form'
import {Link ,useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login ,logout } from '../../Store/AuthSlice'
import Input from '../Input'

import {LoginUser} from '../../Api/API.js'


function Login() {
const navigate=useNavigate()
 const dispatch=useDispatch()
  const {handleSubmit,register ,setValue  } =useForm()   
 

  const LoginForm=async (data)=>{
     
    try {
      console.log(data)
      const Resp=await LoginUser(data)
      console.log(Resp)
     if(Resp!==false)
     {
      console.log(Resp.data.Token)
      const Token=Resp.data.Token
      dispatch(login({Token}))
      navigate('/addPost')

     }else{
      console.log('Wrong Auth')
     alert('wrong AUthenticvatipn')
     setValue('username',"")
     setValue('password','')
     }


    } catch (error) {
      console.log(error)
    }


  }


  return (

     <>


         <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form className="space-y-4 j  "  onClick={handleSubmit(LoginForm)}  >
          <Input
            type="text"
            id="username"
            label="Username"
            placeholder="Enter your username"
            {...register('username',{required:true})}
          />
        
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            {...register('password',{required:true})}
          />
        
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div> 






    </>  
    
  )
}

export default Login