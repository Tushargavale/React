import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Dummy=()=>{
    //console.log('DUMMY LOADED')

    useEffect(()=>{
        console.log('component')

        return console.log('component unmounted')
    },[])
    return(<>
    <br /><br /><br /><br /><br /><br />
    <h1>HELLO</h1>
    </>)
}


function Protocted({child}) {
    const navigate=useNavigate()
    const Auth=useSelector((state)=>state.Auth.status)

    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        if(!Auth)
            navigate('/login')
        else
            setLoader(false)
    },[navigate,Auth])



   return loader ? children : <h1>Loading...</h1>;  // Fixed JSX return 
}

export default Protocted