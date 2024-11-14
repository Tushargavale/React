import React, { useEffect } from "react"
import Input from "./Input"
import {useForm} from 'react-hook-form'
import axios from 'axios' 
import {useDispatch ,useSelector } from 'react-redux'
import { loginUser } from "../../../Redux/ThunkReducer/AuthAPI"
import {useNavigate} from 'react-router-dom'
const Login=()=>{
  const navigate=useNavigate()
  const user=useSelector((state)=>state.user.status)
    const dispatch=useDispatch()
    const {handleSubmit,register,setValue} =useForm()

    const loginform=(data)=>{

      dispatch(loginUser({
        "username": "jaydon_bailey",
        "password": "oNC6k4NpULr8as_",
        "role": "ADMIN"
      }))
        
        // setValue('username','')
        // setValue('password','')
    } 

    useEffect(()=>{
      console.log(user)
      if(user)
        navigate('/Products')
    },[user])


   

    return(
        <>

    
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">login</h2>
        <form className="space-y-4 j  "  onSubmit={handleSubmit(loginform)}  >
        
        <Input 
        label="userName"
        type="text"
        {...register('username',{required:true})}
        >
        </Input>  


        <Input
        label="password"
        type='password'
        {...register('password',{required:true})}
        >
        
        </Input>
      
       <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

             
        </form>

      
      </div>
    </div> 
  </>
    )
}


export default Login








