import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Component/component1'
import FormData from './Component/FormData'
import Hooksdemo from './Component/Hooksdemo'

function App() {
 let data=Hooksdemo()

  function fun()
  {
    //data='TUSHAR GAVALE   New Data is set'
  }

  return <div> 
  {/* <Component1></Component1> */}
  
  <FormData></FormData>
  <button onClick={fun} >UPDATE A NAME</button>
  <h3>{data}</h3>

  </div>
}





export default App
