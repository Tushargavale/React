import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate ,Outlet} from 'react-router-dom'
const ProctedRoute = ({children}) => {
   
  
    const navigate=useNavigate()
    const state=useSelector((state)=>state.user.status)
    const [loader,setLoader]=useState(false)

     useEffect(()=>{
        if(!state)
            navigate('/login')
          else
          setLoader(true)

     },[state,navigate])

  return (
   <>
   {loader?children:<h1>Loading</h1>}
   </>
  )
}

export default ProctedRoute