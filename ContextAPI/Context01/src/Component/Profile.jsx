import { useContext } from 'react'
import userContextProvider from '../Context/userContext'
import React from 'react'

function Profile() {

    const {user}=useContext(userContextProvider)

    if(!user) return <h1>Please Login</h1>


  return (
    <div>Welcome  {user.username}</div>
  )
}

export default Profile