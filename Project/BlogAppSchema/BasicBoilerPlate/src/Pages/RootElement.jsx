import React, { useEffect, useState } from 'react'
import Navbar from '../Component/NavBarComp/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUSer } from '../Redux/authAPI'


const RootElement = () => {
const [loading,setLoading]=useState(false)
const mainContainerStyle = {
  display: "flex",
  flexDirection: "column",
  // minHeight: "100vh", // Ensures full height
};


const dispatch=useDispatch()
const state=useSelector((state)=>state.user.status)

useEffect(()=>{
  dispatch(fetchUSer()).then(()=>setLoading(true))
  
  
  // return ()=>{
  //   setLoading(false)
  // }
},[state])
 return loading ?(
   
    <>
   <Navbar/>
   <div className="MainContainer"
    style={mainContainerStyle}
    >
        <Outlet></Outlet>
   </div>
   
   <Footer/>
   </>
  


  ) : <h1>Loadin</h1>
}

export default RootElement