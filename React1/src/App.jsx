import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [arr,setArr]=React.useState(["Tushar","Rohan"])
   let [name,setName]=React.useState("TUSHAR")
  let [par,setPar]=React.useState(['a'])
  // function changeName()
  // {
  //   let A=document.getElementById('IN').value
  //     // setName(A)
  //    // setArr(arr.push(A))
  //     setName(arr.push(A))
  //     console.log(arr)
  // }

  function updatePar()
  {
    let p=document.getElementById('par').value
    console.log(par)
 
    setPar([...par,p])
    
  }




  return (
    <>
      <h1>Welcome to our first WEB SIte</h1>

      ==============================
      
      <input type='text' id='par'/><br/><br/>

      <button onClick={updatePar} >click</button>
        {par.map((data)=>{
          
          console.log('from map method...')
          return <ShowData par={data} ></ShowData>
        })}

  
    </>
  )
}


function ShowArr(props)
{
  return <div>
    <h5>{props.Arr}</h5>
  </div>
}

function ShowData(props)
{
  return <div>
    <p>{props.par}</p>
  </div>
}

export default App
