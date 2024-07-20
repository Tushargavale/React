import React from 'react'
import {useSelector ,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logout } from '../Store/AuthSlice'


function LogoutButton(props) {
  const navigate=useNavigate()
const dispatch=useDispatch()

   async  function  Logout(){
      
    localStorage.removeItem('user')
    dispatch(logout())
    navigate('/')

    }

  return (
   <button {...props} onClick={Logout}>Logout</button>
  )
}

export default LogoutButton