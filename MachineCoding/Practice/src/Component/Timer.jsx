import React,{useState,useEffect,useRef} from 'react'

const Timer = () => {

    const [sec,setSec]=useState(0)
    const [min,setMin]=useState(0)
    const [hour,setHour]=useState(0)
    const [msec,setMsec]=useState(0)
    const [up,setUp]=useState(false)
    const  timerref=useRef()

   
    useEffect(() => {
    if (up) {
    timerref.current = setInterval(() => {
      setMsec(prev=>prev+1)
    }, 100);
  } else {
    clearInterval(timerref.current);
  }

  return () => clearInterval(timerref.current);
}, [up]);


    useEffect(()=>{
        if(msec==10)
        {
            setSec(sec+1)
            setMsec(0)
        }
    },[msec])


    useEffect(()=>{
        if(sec==60)
        {
            setMin(min+1)
            setSec(0)
        }
    },[sec])



    useEffect(()=>{
        if(min==60)
        {
            setHour(hour+1)
            setMin(0)
        }
    },[min])










  return (
    <>
        <div>{` ${hour}:${min}:${sec}:${msec}`}</div>  <br />
        <button
        onClick={()=>setUp(!up)}
        >Start</button>
        <button 
        onClick={()=>{
            setHour(0)
            setMin(0)
            setMsec(0)
            setSec(0)
        }}
        >Reset</button>
    </>
  )
}

export default Timer