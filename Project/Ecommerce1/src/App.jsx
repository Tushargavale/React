
import './App.css'
import { loginUser} from '../Redux/ThunkReducer/AuthAPI'
import {useDispatch,useSelector} from 'react-redux'
import { getUser } from '../Redux/Feture/userSlice'
import { Outlet ,useNavigate } from 'react-router-dom'
import {Header} from './Component/LayOut/Header'
import { refreshLogin } from '../Redux/ThunkReducer/AuthAPI'
import { useEffect } from 'react'


import Container from './Component/Container/Container'
import Footer from './Component/LayOut/Footer'



function App() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
//  console.log(useSelector((state)=>state.user))
  const user=useSelector((state)=>state.user.status)
  useEffect(()=>{
    dispatch(refreshLogin())
  },[])
  
  useEffect(()=>{
    if(user)
      navigate('/Products')
  },[user])
  
  return (
    <>
    <Header></Header>
    <div className="pb-16"> 
       <Outlet/>
    </div>
     <Footer></Footer>
    </>
  )
}

export default App
