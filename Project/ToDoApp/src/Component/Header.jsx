import React from 'react'  
import Container from './Container';
import {Link,useNavigate} from 'react-router-dom'
import LogoutButton from '../Component/FormComponent/LogoutButton'
import { useSelector } from 'react-redux';
import authservice from '../../Appwrite/Auth';

function Header() {
  
  const navigate=useNavigate()
    let Authstate=useSelector((state)=>state.Auth.status)

    let NavItem=[
      
        {
            name:'Login',
            slug:'/Login',
            value:!Authstate
        },
        {
            name:'Signup',
            slug:'/Signup',
            value:!Authstate
        },
        {
            name:`All blog`,
            slug:'/AllBlogs',
            value:Authstate
        },
        {
            name:'Post',
            slug:'/Post',
            value:Authstate
        },
        
        
    ]
  
    // console.log('Header is Render')

    const getUser=async()=>
    {
      const data=await authservice.getCurrentUser()
      console.log(data)
    }
  
  
  
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
              
       {
              <li>
                <button onClick={()=>navigate('/')}  className='inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200' >
                  About
                </button>
              </li>
            }



            {NavItem.map((item) =>
              item.value ? (
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

           

            {/* {Authstate && (                     // uncomment this after all work completion      */}   
                {true && (
              <li>
                <LogoutButton className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200" />
              </li>
            )}


            {
              <button onClick={getUser} >getUser</button>
            }




          </ul>
        </nav>
      </Container>
    </header>
   
   </>
  )
}

export default Header