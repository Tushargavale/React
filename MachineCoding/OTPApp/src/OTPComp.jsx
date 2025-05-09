import React, { useRef, useState ,useEffect, useCallback, useMemo,memo} from 'react'
import GetGreeting from './GetGreeting'
const OTPComp = () => {
 
   const [name,setName]=useState('')
   const [counter,setCounter]=useState(0)

  // const getGreeting=useCallback(()=>{
  //   return `Hello ${name}`
  // },[name])
  const greetName=useMemo(()=>{
    return name
  },[name])
console.log('Child is rendering')
 return(
 <>
  <div>
    <input type="text" 
    style={{backgroundColor:'white',color:'black',padding:'5px',fontSize:'22px'}}
    placeholder='Enter Your Name'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <br /><br /><b></b>
    <GetGreeting GetGreeting={greetName}/>
    <br /><br /><br />
    {counter}
    <br /><br />
    <button onClick={()=>setCounter(counter+1)}>IncreseCounter</button>
  </div>


 </> 
 )
}

export default OTPComp