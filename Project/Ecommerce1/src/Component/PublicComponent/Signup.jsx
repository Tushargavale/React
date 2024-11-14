import React from "react";
import Input from "./Input";
import {useForm} from 'react-hook-form'



const Signup=()=>{

    const {register,handleSubmit,setValue} =useForm()

    const submitForm=(data)=>{
        console.log(data)
        setValue('name','' )
        setValue('email','' )
        setValue('password','' )
        setValue('username','' )
    }



    return (
        <>


        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">login</h2>
        <form className="space-y-4 j  "  onSubmit={handleSubmit(submitForm)}  >
        
       




        <Input
        label='name'
        type='text'
        {...register('name',{required:true})}        
        />    

        <Input
        label='email'
        type='email'
        {...register('email',{required:true})}        
        />



        <Input
        label='username'
        type='text'
        {...register('username',{required:true})} 
        /> 


        <Input
        label='password'
        type='password'
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



export default  Signup