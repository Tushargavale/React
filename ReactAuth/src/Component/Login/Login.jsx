

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


         <div classname="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div classname="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 classname="text-2xl font-bold mb-6 text-gray-800 text-center">login</h2>
        <form classname="space-y-4 j  "  onclick={handleSubmit(LoginForm)}  >
          <input
            type="text"
            id="username"
            label="username"
            placeholder="enter your username"
            {...register('username',{required:true})}
          />
        
          <input
            type="password"
            id="password"
            label="password"
            placeholder="enter your password"
            {...register('password',{required:true})}
          />
        
          <button
            type="submit"
            classname="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            sign up
          </button>
        </form>
      </div>
    </div> 






    </>  
    
  )
}

export default Login