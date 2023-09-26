import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Component/showData'

var VDOM=[]

function App() {
  
  let[ user,setUser ]=React.useState([])

  React.useEffect(()=>{
  
    fetch('http://localhost:3000/data').then((data)=>data.json()).then((data)=>{
      console.log(data+"   FROM FETCH CALL")
    setUser(data)
   
  })
 
      },[])


  function fun()
  {
    console.log(user)
  }



  function ShowData(props)
  {
  
  let usr=props.user1
  return <div>
    <h1>Data Table</h1>
    <table id='ID1' >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Loacions</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {usr.map((item) => (
          <tr key={item}>
            <td>{item.Name}</td>
            <td>{item.ID}</td>
            <td>{item.Company}</td>
            <td>{item.Location}</td>
            {/* Add more table cells for other data properties */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  }

    function submit()
    {
      let Name=document.getElementById('name').value
      let ID=document.getElementById('ID').value
      let Location=document.getElementById('location').value
      let Company=document.getElementById('comp').value
      let obj={Name,ID,Location,Company}
      console.log(obj)
      fetch('http://localhost:3000/add',{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          "Content-Type":"application/json"
      }
      }).then((data)=>data.json()).then((data)=>{console.log(data)
      setUser(data)})

    

 }


    function Form()
    {
      return <div>
        <label>Name</label> <input type='String' id='name' ></input> <br/>
        <label>ID</label> <input type='number' id='ID' ></input> <br/>
        <label>Location</label> <input type='String' id='location' ></input><br/>
        <label>Company</label> <input type='String' id="comp" ></input><br/>
        <button onClick={submit} >click Here</button>
        

      </div>
    }


  return (
    <>
        <button onClick={fun} >CLICK</button><br/>

        <Show name={"Tushar Gavale"} ></Show>
        <Form></Form>
        <ShowData user1={user} ></ShowData> <br></br>
          <Test></Test>

        
    </>
  )
   


  }







function Show(props)
{
  console.log(props.name)
  return <div>
 {props.name}
 </div>
}






export default App
