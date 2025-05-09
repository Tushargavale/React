import { useEffect, useRef, useState } from 'react'
import OTPComp from './OTPComp'
import './App.css'

function App() {
  
  const [otp, setOtp] = useState(new Array(4).fill(''))

  let inputRef=useRef([])
//  console.log(inputRef)

  useEffect(()=>{
    if(inputRef.current[0])
      inputRef.current[0].focus()
  },[])


const handleChange=(index,e)=>{
  let val=e.target.value 
 if(isNaN(val))
  return;


  let newArr=[...otp]
  newArr[index]=val 
  setOtp(newArr)

 
  if( val && index<otp.length-1 )
  {
    console.log("RUN THE FUN")
    inputRef.current[index+1].focus()
  }

  if(index==3)
  {
    console.log(newArr.join(''))
  }

 
  

 }

const handleClick=(e,index)=>{}

const handleKey=(e,index)=>{
  if(e.key=='Backspace' && !e.target.value  && index >0 )
  {
   inputRef.current[index-1].focus()
  // inputRef.current[index-1].focus()
  }
}


  return (
    // <>
    //  <div className="container" key={otp.length} >
    //   {otp.map((val,index)=>{
    //     return (<>
    //     <div className="otp" key={index} >
    //       <input type="text" 

    //       key={index} 
    //       ref={(input)=>{
    //        return inputRef.current[index]=input
    //       }}
    //       maxLength={1}
    //       typeof='text'
    //       value={val}
    //       onChange={(e)=>{handleChange(index,e)}}
    //       onClick={(e)=>handleClick(e,index)}
    //       onKeyUp={(e)=>{handleKey(e,index)}}
         
    //     />
    //     </div>
    //  </>)
       

    //   })}
    //  </div>
    // </>
    <>
    <OTPComp/>
    
    </>
  )
}

export default App
