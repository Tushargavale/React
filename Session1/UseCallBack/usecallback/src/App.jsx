import { useState } from 'react'

import './App.css'
import Age from './Component/Age'
import { Salary } from './Component/Salary'
import { useCallback } from 'react'
function App() {

  console.log('Parent component is Re-render')
  const [age, setAge] = useState(15)
  const [salary,setSalary]=useState(5000)
  const incrsesalary=()=>{
    setSalary((d)=>d+1)
  }


  // if we use increseage function without usecallback then every  time parent is render then this function also created ,so it's refrence value 
  // will change and because of that Age component also render without change in age (we use usememo hook in Age component) 
  // to avoid this we use usecallback hook
  const increseage= useCallback(()=>{
    setAge((d)=>d+1)
  },[age]) 

  return (
    <>
   
     <Age age={age} increseage={increseage} ></Age>
     <button onClick={incrsesalary} >increse SAlary</button>
     <Salary salary={salary} >  </Salary>

    </>
  )
}

export default App
