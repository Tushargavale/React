import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import Table from './component/Table'
import AddData from './component/AddData'


function App() {
 
  const data=Todo()

  return (
    <div>
      <h1>Welcome</h1>
      <AddData></AddData><br/>
        <Table data={data} ></Table> 
    </div>
  )
}






export default App
