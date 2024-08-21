import { logoutUser } from '../../Redux/AsyncThunk'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

function LogoutButton(props) {

  const state=useSelector((state)=>state.Auth.status)
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const Logout=()=>{
      dispatch(logoutUser())
    //  navigate('/Login')
    }

    useEffect(()=>{
      if(!state)
        navigate('Login')

    },[state])




  return (
 <button {...props} onClick={Logout}  >Logout</button>
  )
}

export default LogoutButton