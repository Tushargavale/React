import React from "react"
import Input from "./Input"
import {useForm} from 'react-hook-form'
import axios from 'axios' 

const LoginPage=()=>{
    
    const {handleSubmit,register,setValue} =useForm()

    const loginform=(data)=>{

        console.log(data)
       
        axios.post(`http://localhost:8081/api/v1/users/login`,data,{
          withCredentials:true
        }).then((data)=>{
          console.log(data.data)
        //  localStorage.setItem('refreshToken',data.data.data.refreshToken)
        }).catch((err)=>{
          console.log(err)
        })

        
        // setValue('username','')
        // setValue('password','')
    } 



    //'refreshToken':localStorage.getItem('refreshToken')

//http://localhost:8081/api/v1/users/refresh-token
    const getAccessToken=()=>{
      console.log('axios req generated')
      axios.post(`http://localhost:8081/api/v1/users/refresh-token`,{},{
        withCredentials:true
      }).then((data)=>{
        console.log(data)
        console.log('New Access Token')
      }).catch((err)=>{
        console.log(err)
      })

  
    
    }



    const Logout=()=>{
      console.log('axios req generated')
      axios.post(`http://localhost:8081/api/v1/users/logout`,{},{
        withCredentials:true
      }).then((data)=>{
        console.log(data)
        console.log('New Access Token')
      }).catch((err)=>{
        console.log(err)
      })

    }

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

          <br /><br /><br /><br />
         
        </form>

        <button onClick={getAccessToken}  >
            getAccessTokenFunction
          </button>
          <br /><br /><br />

          <button onClick={Logout}  >
            Logout
          </button>
      </div>
    </div> 
  </>
    )
}


export default LoginPage









