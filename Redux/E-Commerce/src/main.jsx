import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NavBar2 from './NavBar.jsx'
import { Routers } from './Router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <BrowserRouter>
    <NavBar2></NavBar2>
    <App  />
    </BrowserRouter>
    
  </StrictMode>,
)
