import { useEffect, useState } from 'react'

import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootElement from './Pages/RootElement'
import * as root from './Pages/AllPage'
import ProctedRoute from './Component/ProctedRoute'
import { useDispatch } from 'react-redux'
import { fetchUSer } from './Redux/authAPI'
function App() {
let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUSer())
  },[])

  const router=createBrowserRouter(
    createRoutesFromElements(
      
        <Route path='/' element={<RootElement/>} >
        
          <Route index element={<root.HomePage/>} ></Route>
          <Route path='/login' element={<root.LoginPage/>}  ></Route>
          <Route path='/signup' element={<root.SignupPage/>} ></Route>
          <Route path='/about' element={<root.AboutPage/>} ></Route>

<Route path='/cart' element={<ProctedRoute  children={<root.CartPage />} />} />
<Route path='/profile' element={<ProctedRoute children={<root.ProfilePage />} />} />
<Route path='/product' element={<ProctedRoute children={<root.ProductPage />} />} />
<Route path='/contact' element={<ProctedRoute children={<root.ContactPage />} />} />

          </Route>
     
    )
  )

  return (
<>

 <RouterProvider router={router} ></RouterProvider>

</>
  )
}

export default App
