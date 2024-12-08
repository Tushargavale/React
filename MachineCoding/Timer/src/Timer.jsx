import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
function Timer() {

    const [time,setTime]=useState(0)
    const [isstart,setIsstart]=useState(false)   
    const [btnname, setbtnname] = useState('start')

    const [min,setMin]=useState(0)
    const [hour, sethour] = useState(0) 
    const [sec, setsec] = useState(0)
    const [msec,setmsec]=useState(0)


    function startStopTimer(){
        setIsstart(!isstart)
        if(!isstart)
            setbtnname('Stop')
        else 
         setbtnname('Start')
    }  

    function Reset()
    {
        setIsstart(false)
        setMin(0)
        sethour(0)
        setsec(0)
    }



   useEffect(()=>{
       let ID; 

        if(isstart){
        ID=setInterval(() => setsec((sec)=>sec+1), 1000);
        }
       return ()=>clearInterval(ID)

   },[sec,isstart])   


   useEffect(()=>{
      if(sec==60)
    {
        setsec(0)
        setMin(min+1)
      //  setmsec(0)
    }
   },[sec,min,msec])



    return (
    <>
    <div className="timer">
        <input className='hour' type="number" onChange={()=>{}} value={hour} />
        <input className='min' type="number" onChange={()=>{}}  value={min}/>
        <input className='sec' type="number" onChange={()=>{}} value={sec} />
        {/* <input className='sec' type="number" onChange={()=>{}} value={msec} /> */}
    </div>
    <div className="btn">
    <button onClick={startStopTimer} >{btnname}</button> 
    <button onClick={Reset} >Reset</button>
    </div>
   

   <h5>{time}</h5>
    
    
    </>
  )
}

export default Timer