import React from 'react'
import NavBar from '../Component/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default RootLayout