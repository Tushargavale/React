import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from '../Redux/store.js'
import {Provider} from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './Route/Route.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Provider store={store} >
    <RouterProvider router={Routers} >
    <App />
    </RouterProvider>
    </Provider>
  
  </StrictMode>,
)
