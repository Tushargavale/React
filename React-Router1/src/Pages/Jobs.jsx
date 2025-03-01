import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const Jobs = () => {

const JobsData=useLoaderData();



  return (
<>
{JobsData.map((data)=>{
    return <NavLink>
        <h3>{data.title}</h3>
    </NavLink> 
})}
</>   
  )
}

export default Jobs

export const JobsLoader=async()=>{
    const resp=await fetch('http://localhost:5000/Jobs')
    return resp.json()
}





