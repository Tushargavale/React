import { useState } from 'react'
import './App.css'
import {} from 'react-hook-form'
import HomePage from './Component/PublicComponent/HomePage'
import ContactPage from './Component/PublicComponent/ContactPage'
import Input from './Component/PublicComponent/Input'
import LoginPage from './Component/PublicComponent/LoginPage'
import SignupPage from './Component/PublicComponent/SignupPage'
import Footer from './Component/LayOut/Footer'
import { Header } from './Component/LayOut/Header'
import Profile from './Component/PrivateComponent/Profiles'
import {Outlet} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

    </>
  )
}

export default App
