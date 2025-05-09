import React from 'react'
import './Layout1.css' 
import Card from './Card'
import Outlet from './Outlet'
import Login from './Login'
import SignupPage from './Signup'
const Layout1 = () => {
  return (
   <div className="container">
    <div className="item header">Item1</div>
    <div className="item item2">
      <Login/> 
      <SignupPage/>
      {/* <Outlet/> */}
    </div>

    <div className="item footer">item6</div>
   </div>
  )
}

export default Layout1