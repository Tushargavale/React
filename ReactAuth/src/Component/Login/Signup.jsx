import Input from "../Input"
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

export const Signup=()=>{

const {register,setValue,handleSubmit} =useForm()

const Signup=(data)=>{
console.log(data)
}

    return(<>
     

  <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        <form className="space-y-4"  onClick={handleSubmit(Signup)}  >
          <Input
            type="text"
            id="username"
            label="Username"
            placeholder="Enter your username"
            {...register('username',{required:true})}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Enter your email"
            {...register('email',{required:true})}
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
    </>)
}


