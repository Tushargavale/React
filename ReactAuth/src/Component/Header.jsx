

import React from 'react'

import Container from './Container'
import LogoutButton from './LogoutButton'
import {Link ,useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'


function Header() {
// const navigate=useNavigate()

  const navigate=useNavigate()
  const authStatus=  useSelector((state)=>state.Auth.status)    // false //useSelector((state)=>state.Auth.status)
  const navItem=[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "Add To Card",
      slug: "/addPost",   // We can say that this is Routr URl
      active: authStatus,
  },
  
  ]

  return (
    <>
   

     <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md z-50">
      <Container>
        <nav className="flex items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="path/to/logo.png" alt="Logo" className="h-10" /> {/* Add your logo path */}
            </Link>
          </div>
          <ul className="flex ml-auto space-x-6">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200" />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>






    </>
  )
}


export default Header