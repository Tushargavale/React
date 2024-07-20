import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route  ,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Base from './Component/Base.jsx'  
import Login from './Component/Login/Login.jsx'
import { Signup } from './Component/Login/Signup.jsx'
import AddPost from './Component/AddPost.jsx'
import ProtectedRoute from './Component/ProtectedRoute.jsx'
import Learn from './Component/Learn.jsx'

import {Provider} from 'react-redux'
import store from './Store/Store.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>} >
      <Route path='/' element={<Base></Base>} ></Route>
      <Route path='/login' element={<Login></Login>}  ></Route>
      <Route path='/signup' element={<Signup></Signup>} ></Route>
      <Route path='/addPost' element={<ProtectedRoute>{<AddPost></AddPost>}</ProtectedRoute>} ></Route>
      <Route path='/learn' element={<ProtectedRoute>{<Learn></Learn>}</ProtectedRoute>} ></Route>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
   <RouterProvider router={router} ></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
