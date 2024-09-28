import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import Router from './Component/Router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} >
   
    </RouterProvider>
  </StrictMode>,
)
