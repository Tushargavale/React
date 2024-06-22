import React, { useState ,useCallback} from 'react';
import format from 'date-fns/format';
import { Card } from './Component/Card';
import Age from './Age';
//import { Age } from './Age';
import { Salary } from './Salary';
function App() {

  console.log('Parent component is Render')

  const [age,setAge] =useState(50)
  const [salary,setSalary]=useState(5000)

  const incresesalary=()=>{
    setSalary((d)=>d+1)
  }


  const increseage=useCallback(()=>{
    setAge((d)=>d+1)
  },[age])

  return(<>
    <h1>USECALLBACk</h1>
    <Card handleclick={incresesalary} value={'salary'} ></Card>
    <Salary salary={salary} > </Salary>
    <br /><br />
    <Card handleclick={increseage} value={'AGE'} ></Card>
    <Age age={age} > </Age>
    <br /><br />
  </>)
}

export default App;