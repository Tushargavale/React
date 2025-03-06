import React, { useEffect } from 'react'
import './Navbar.css'
import { NavLink,useNavigate } from 'react-router-dom'
import { fetchUSer,Logout } from '../../Redux/authAPI'
import { useSelector,useDispatch } from 'react-redux'

const Navbar = () => {
  const navigate=useNavigate()

let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUSer())
  },[navigate])

  

  const Auth= useSelector((state)=>state.user.status)
 

  //const Auth=false


  const content=[
  {
      value:'Login',
      slut:'/login',
      Auth:!Auth  
  },
  {
    value:'Sign Up',
    slut:'/signup',
    Auth:!Auth,
  },
  {
    value:'Profile',
    Auth:Auth,
    slut:'/profile'
  },
  {
    value:'Cart',
    Auth:Auth,
    slut:'/cart'
  },
  {
    value:'Products',
    Auth:Auth,
    slut:'/product'
  }
]

const commonContent=[
    {
        value:'Home',
        slut:'/'
    },
    {
        value:'About',
        slut:'/about'
    },
    {
        value:'Contact us',
        slut:'/contact'
    }
]

function Logoutuser(){
  dispatch(Logout())
  // navigate('/login')
}
  

 return (
    <div className="NavBarContainer">
     {/* Common  */}
      <div className="common">
        {commonContent?.map((item, key) => (
          <NavLink key={key} className="item" to={item.slut}>
            {item.value}
          </NavLink>
        ))}
      </div>

    
      <div className="condition">
        {content
          ?.filter((item) => item.Auth) 
          .map((item, key) => (
            <NavLink key={key} className="item" to={item.slut}>
              {item.value}
            </NavLink>
          ))}
      </div> 
      {Auth? 
      <div className='condition'>
        <button className='item' onClick={Logoutuser} >
          Logout
        </button>

      </div>  
    :null
    }
    </div>
  );




  
}

export default Navbar