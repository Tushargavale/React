import React, { useState,useEffect,memo } from 'react'

const GetGreeting = ({GetGreeting}) => {
    const [greeting,setGreeting]=useState()
    
    useEffect(() => {
    setGreeting(GetGreeting)
    console.log("Greeting Box: useEffect")
     }, [GetGreeting])
    
  return (
    <div>{`Welcome Greeting to  ${greeting}`}</div>
  )
}

export default memo(GetGreeting)
