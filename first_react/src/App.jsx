import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let Obj={
    name:"TUSHAR GAVALE <<<<<<<<<<<<<<<<<<<"
  }
  
   let [arr,setArr]=React.useState([{Name:"Tushar",ID:10},{Name:"Rohan",ID:12},{Name:"VISHAL",ID:44},{Name:"Dinesh",ID:12},{Name:"Rohit",ID:44}])



    let[ dame,setDame ]=React.useState({})
    React.useEffect(()=>{
      setInterval(() => {
        fetch('http://localhost:3000/data').then((data)=>data.json()).then((data)=>{
          console.log(data)
        setDame(data)
      })
      }, 2000);
 
     
    },[])

 

  return (
<>    
    {arr.map((data)=>{
      return <Todo Name={data.Name} ID={data.ID} ></Todo>
    })}
 <h3>Welcome</h3><br></br>
    {dame.animal}
    {dame.countries}
    {JSON.stringify(dame)}

   </>

  )
}

function Todo(props)
{
  return <div>
    {props.Name}
    {props.ID}
  </div>
}

function Data(props)
{

  return <div>
    {props.animal}
    {props.countries}
  </div>
}


export default App
