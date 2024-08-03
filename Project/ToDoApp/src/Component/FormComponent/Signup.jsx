import React from "react";
import Input from "./Input"; 

// import React from 'react'
import {useForm} from 'react-hook-form'

function Signup() { 

    const {handleSubmit,register} =useForm()

    const Signup=(data)=>{
        console.log(data)
        console.log('Signup Successfully')
    }


  return (
   <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">login</h2>
        <form className="space-y-4 j  "  onClick={handleSubmit(Signup)}  >
          <Input
            type="text"
            id="name"
            label="name"
            placeholder="enter your name"
            {...register('name',{required:true})}
          />  
            <Input
            type="email"
            id="email"
            label="email"
            placeholder="enter your email"
            {...register('email',{required:true})}
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

export default Signup