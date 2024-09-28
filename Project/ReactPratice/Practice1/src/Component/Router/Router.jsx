import React from 'react'

import {Navigate,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import App from '../../App'
import ProtectedRoute from '../ProtectedRoute'

const Router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' >
    <Route index element={<App/>} ></Route>
    <Route path='/Home' element={<Home></Home>} ></Route>
    <Route path='/Contact' element={<Contact></Contact>} ></Route>
    
    <Route path='/About'  element={<ProtectedRoute child={<About></About>} ></ProtectedRoute>} ></Route>
    </Route>
))



export default Router