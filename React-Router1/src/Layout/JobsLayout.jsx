import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <>
    <div>
        <h2>Job Opening</h2>
        <p>Current Job Opening in our compony</p>
        <Outlet></Outlet>



        
    </div>
    </>
  )
}

export default JobsLayout