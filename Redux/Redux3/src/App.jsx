import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authservice from './Appwrite/Auth'
import { login ,logout } from './Store/AuthSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
 import {Outlet} from 'react-router-dom'
import Signup from './Components/Signup'
import './App.css'




function App() { 

  const dispatch=useDispatch()


  console.log('App Component is Re-renderd')

  const [loading,setLoading] =useState(true)

  useEffect(()=>{
    // console.log('DEBUG')
    authservice.getcurrenUser()
    .then((userdata)=>{
      if(userdata)
      {
        dispatch(login(userdata))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

// console.log(import.meta.env.VITE_APP_APPWRITEURL)

 return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
