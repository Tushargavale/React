// const { Children } = require("react");

import { useState ,useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useLocation ,useNavigate } from "react-router-dom"



const ProtectedRoute=({Children})=>{
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const user=useSelector((state)=>state.user.status)
    
    const location=useLocation()

    useEffect(()=>{
       // console.log(user)
        if(!user) {
            navigate('/Login')
        }else 
        setLoader(false)

    },[location,user])

    return(
        loader?<>...Loading Page </> : <Children></Children>
    )
    

}


export default ProtectedRoute








