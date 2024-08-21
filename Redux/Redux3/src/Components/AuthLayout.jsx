import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,Authentication=true}) {

    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const Authstatus=useSelector((state)=>state.Auth.status)
  
    useEffect(()=>{

        console.log(Authstatus)


        if(Authentication && Authstatus !== Authentication )
        {
            navigate('/login')
        }else{}
        // if(!Authentication  && Authstatus!==Authentication )
        //     navigate('/')

        setLoader(false)
    },[Authstatus,navigate,Authentication])



  return (
   loader ? <h1>Loading...</h1> : <>{children}</>
  )
}

