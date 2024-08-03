import { logoutUser } from '../../Redux/AsyncThunk'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function LogoutButton(props) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const Logout=()=>{
      dispatch(logoutUser())
      navigate('/Login')
    }




  return (
 <button {...props} onClick={Logout}  >Logout</button>
  )
}

export default LogoutButton