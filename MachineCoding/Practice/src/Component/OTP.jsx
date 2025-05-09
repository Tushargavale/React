import React, { useEffect, useRef, useState } from 'react'

const OTP = () => {
  
  const [otp,setOtp]=useState(Array.from({length:4},()=>""))
  
    

  const ref=useRef([])

    useEffect(()=>{
        ref.current[0].focus()
    },[])





  function Handler(e,index){
    let temp=[...otp]
    console.log('HS')
 let value=e.target.value
        let lastvalue=value.charAt(value.length-1)
        temp[index]=lastvalue


    if(e.target.value!="")
     if(index<otp.length-1)
     {

        temp[index]=lastvalue
        ref.current[index+1].focus()
        setOtp(temp)
     }else{
        temp[index]=lastvalue
        setOtp(temp)
        console.log(temp)
     }
  }


  function HandlebackSpace(e,index){
    if(e.key=="Backspace" && index>=0 )
    {
          let temp=[...otp]
        temp[index]=''
        if(index>0)
            ref.current[index-1].focus()
        else
            ref.current[index].focus() 

        setOtp(temp)



    }
  }





    return (
  <>
  <div style={{
    marginLeft:'200px',
    marginTop:'250px'
  }} >


{otp.map((item,index)=>{
    return <input
    ref={(e)=>{
        ref.current[index]=e
    }}    
    
    type="text" value={item} onChange={(e)=>Handler(e,index)} onKeyDown={(e)=>HandlebackSpace(e,index)} key={index}
    style={{
       width:'32px',
       height:'32px',
       padding:'5px',
       border:'1px solid black', 
       margin:'5px',
       textAlign:'center'
    }}
    
    />
  })}




  </div>
  
  
  </> 
  )
}

export default OTP