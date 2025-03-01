import React from 'react'
import './Test.css'
function Test() {
  return (
    <>
       
    <nav className='navbar' >
      <div className="navbarcontainer container">
       <input type="checkbox" />
       <div className="humbergerline">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
       </div>
       <ul className='menu-item' >
        <li><a href="#showcase">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Food">Food</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Profile">Profile</a></li>
       </ul>
       <h1 className="logo">FW</h1>
     </div>
    </nav>



    </>
  )
}

export default Test

