import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './Component/Router/Router.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={Router} >
    <App />
    </RouterProvider>
  </StrictMode>,
)
