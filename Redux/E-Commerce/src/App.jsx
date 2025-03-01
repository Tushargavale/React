import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './Products'
import { Product } from './Component/Products'
import { Routers } from './Router'
import { Outlet } from 'react-router-dom'
import NavBar2 from './NavBar'
import axios from 'axios'

function App() {


 

  return (
    <>
      <Routers></Routers>
   </>
  )
}

export default App

