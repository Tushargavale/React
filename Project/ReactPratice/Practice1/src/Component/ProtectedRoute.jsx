
import React, { useEffect } from 'react'

export default function ProtectedRoute({child}) {

    const [loading,setLoading]=React.useState(false)

    useEffect(()=>{
      let name= localStorage.getItem('name')
      if(name==='tushar')
        setLoading(true)
    },[])

  return (loading?<>{child}</>:<><h1>Loading</h1></>)
}



