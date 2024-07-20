import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from './Component/Login/Signup'
import Login from './Component/Login/Login'
import Header from './Component/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
     <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100">
        <Outlet></Outlet>
        {/* <h1>Welcme To Home</h1> */}
      </main>
      <Footer />
    </div>
    

  
    </>
  )
}

export default App
