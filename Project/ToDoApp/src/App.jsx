import { useState } from 'react'

import './App.css'
import {Outlet} from 'react-router-dom'
import Login from './Component/FormComponent/Login' 
import Header from './Component/Header'
import Footer from './Component/Footer'
import Editors from './Component/P-Component/Editor'
import PostForm from './Component/P-Component/PostForm'
import { useEffect } from 'react'
import authservice from '../Appwrite/Auth'
import { useDispatch } from 'react-redux'
import { loginUser ,logoutUser } from './Redux/AsyncThunk'
import { loginAfterRefresh } from './Redux/AuthSlice'
function App() {
  const dispatch=useDispatch()

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    authservice.getCurrentUser().then((data)=>{
      if(data)
      {
        console.log(data)
        dispatch(loginAfterRefresh(data))
      }else{
        dispatch(logoutUser())
      }
    }).
    finally(() => setLoading(false))
  },[])



return !loading ? (
  <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
  </>
) : null
}

export default App
