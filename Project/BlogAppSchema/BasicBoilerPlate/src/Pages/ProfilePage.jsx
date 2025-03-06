import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
const ProfilePage = () => {
  const [user,setUser]=useState({})
  const userProfile=useSelector((state)=>state.user.user)
useEffect(()=>{

},[user])  
  
  
  
  return (
  <>
   <div>ProfilePage</div>
    {userProfile?<>

    {JSON.stringify(userProfile)}    
    </>:null}
  
  
  </> 
  )
}

export default ProfilePage