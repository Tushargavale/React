import React from 'react'
import Card from './Card'
import './Outlet.css'
const Outlet = () => {

    let Arr=Array.from({length:32},()=>0)

  return (
   <>
   <div className="outlet-container">
{Arr.map((item,key)=>{
    return <Card></Card>
  })}  
   </div>
  
      
   </>
  )
}

export default Outlet