import React ,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'  
import { login } from '../Store/AuthSlice'

function ProtectedRoute({children}) {

    const dispatch=useDispatch()
    const Authstate=useSelector((state)=>state.Auth.status)
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
   const getToken=async()=>{
    let user=await JSON.parse(localStorage.getItem('user'))
    
    console.log(user)
    return user
}



    useEffect(() => {
   
        const VerifyFunction=async()=>{
     if(Authstate)
     {
        setLoader(false)
     }else{ 
       let user=await getToken()
       if(user)
       {
        dispatch(login(user))
       setLoader(false) 
       }else{
        navigate('/')
       }
     }
  }   

  VerifyFunction()

    
      
    }, [navigate,Authstate])
    







  return (
   (loader? <h1>Loading.... </h1> : <>{children}</>  )
  )
}

export default ProtectedRoute