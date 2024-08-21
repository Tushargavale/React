import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import authservice from '../../Appwrite/Auth'
import {useNavigate} from 'react-router-dom'
import { logout } from '../../Store/AuthSlice'

export default function LogoutButton() {
    const dispatch=useDispatch() 
    const navigate=useNavigate()
    const user=useSelector((state)=>state.Auth.userData) 

    const LogoutHandler=()=>{
       authservice.LogoutAccount().then(()=>{
        dispatch(logout(user))
        navigate('/login')
       }) 
       
      console.log(user)
    }
  return (
   <button onClick={LogoutHandler} >Logout</button>
  )
}
