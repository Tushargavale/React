import { useState } from 'react'

import './App.css'
import {Outlet} from 'react-router-dom'
import Login from './Component/FormComponent/Login' 
import Header from './Component/Header'
import Footer from './Component/Footer'
import Editors from './Component/P-Component/Editor'
import PostForm from './Component/P-Component/PostForm'
import { useEffect } from 'react'
function App() {

  useEffect(()=>{
    
  },[])


  return (
    <>
    <Header></Header>
   <Outlet></Outlet>
{/* <PostForm></PostForm> */}
    <Footer></Footer>
    </>
  )
}

export default App
