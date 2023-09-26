import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var VDOM=[]

function App() {
  
  let [user,setUser]=useState([])


  function fun()
  {
    let name=document.getElementById('name').value
    let Activity=document.getElementById('Activity').value
    let Timing=document.getElementById('timing').value
    let obj={
      name:name,
      Activity:Activity,
      Timing:Timing
    }
    setUser([...user,obj])                                                        /// 
    
      
}


function show(data)
{
  return <ShowData name={data.name} Activity={data.Activity} Timing={data.Timing} ></ShowData>
}

  return (
    <>

     <Buttons fun={fun} ></Buttons>
     <TableStructure user={user} show={show} ></TableStructure>
     
    </>
  )

  }


























  function Buttons(props)
  {
    return <div>
<label>Name</label> <input type="text" id='name' className='cls' /><br/>
     <label>Activity</label> <input type="text" id="Activity"className='cls' /> <br/>
     <label>Timing </label> <input type='text'id='timing' className='cls'/> <br/>
      <button onClick={props.fun} >SUBMIT</button>
      <br/><br/><br/><br/>
    </div>
  }




  function TableStructure(props)
  {
    return <div>

    <table border="1">
    <thead>
     <tr>
       <th>Name</th>
       <th>Activity</th>
       <th>Activity</th>
    </tr>
  </thead>
  <tbody>
   
  { props.user.map(props.show)}
        
  </tbody>
</table>

  </div>
     
 
  }



function ShowData(props)
{
  return <div>
    
    <tr>
      <td>{props.name}</td>
      <td>{props.Activity}</td>
      <td>{props.Timing}</td>
    </tr>
    </div>
}





export default App
