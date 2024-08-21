import React from 'react'
import {Container,LogoutButton,Logo} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
 function Header() {

  const navigate=useNavigate()
  const authStatus=useSelector((state)=>state.Auth.status)
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
      name: "All Posts",
      slug: "/all-posts",   // We can say that this is Routr URl
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <>
   <header>
      <Container>
        <nav className='flex' >
          <div>
           <Link to="/"></Link>
          </div>
          <ul className='flex ml-auto'  >
          {navItem.map((item)=>
          item.active ? (
            <li key={item.name} >
              <button 
              onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
            </li>
          ) : null
          )}

          {authStatus  && (
            <li>
              <LogoutButton></LogoutButton>
            </li>
          ) }


          </ul>
        </nav>
      </Container>
    </header>
    </>
  )
}

export default Header