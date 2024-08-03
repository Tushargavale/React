import React from 'react'
import Input from './Input'
import {useForm} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../../Redux/AsyncThunk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.Auth.status)

    const {handleSubmit ,register } =useForm()

    useEffect(()=>{
      
      if(state)
        navigate('/Post')
    },[state])





const loginform=(data)=>{
  console.log(data)
    dispatch(loginUser(data))
}

  return (
    <>
    
         <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">login</h2>
        <form className="space-y-4 j  "  onClick={handleSubmit(loginform)}  >
          <Input
            type="text"
            id="username"
            label="username"
            placeholder="enter your username"
            {...register('username',{required:true})}
          />
      
          <Input
            type="password"
            id="password"
            label="password"
            placeholder="enter your password"
            {...register('password',{required:true})}
          />  

          
        
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
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