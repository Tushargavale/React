import React ,{useState,useEffect} from 'react'
import './App.css'

function Counter() {

    const [hour, sethour] = useState(0)
    const [min, setmin] = useState(0)
    const [sec, setsec] = useState(0)
    const [isstart,setistart]=useState(false)
    const handleHourchange=(e)=>{
        let val=e.target.value 
        if(val>24 || val<0 )
            return; 
        sethour(val)
    }
    const handleMinchange=(e)=>{ 
        let val=e.target.value 
        if(val>60 || val<0 )
            return; 
        setmin(val)
    }
    const handleSecchange=(e)=>{ 
        let val=e.target.value 
        if(val>60 || val<0 )
            return; 
        setsec(val)
    } 

    const startTimer=()=>{
        setistart(!isstart)
    }  

    const Reset=()=>{
        setistart(false)
        sethour(0)
        setmin(0)
        setsec(0)
    }

      

    useEffect(() => {
      let ID;

      if(isstart)
      {
        ID=setInterval(() => {
            setsec((prev)=>prev-1)
        }, 1000);
      }
    
      return () => clearInterval(ID)
    }, [isstart,sec])  


    useEffect(()=>{
       if(isstart)
       {
        if(sec==0 && min==0 && hour==0 && isstart )
            {
               setistart(false)
                alert('Time is Completed...')
            }
             if(sec==0 && min>0 )
            {
                setsec(59)
                setmin((prev)=>prev-1)
            }
            if(min==0 && hour>0 )
            {
                setmin(60)
                sethour((prev)=>prev-1)
            }
       }
        
    },[sec,min,hour,isstart])
    






   


  return (
<>
   <h1>Counter</h1>
   <div className="input"  >

    <label>Hour</label>
    <input type="number" value={hour} onChange={handleHourchange} />

    <label>Min</label>
    <input type="number" value={min} onChange={handleMinchange} />

    <label>Sec</label>
    <input type="number" value={sec} onChange={handleSecchange} />
    </div>
    <div className="button">
        <br /><br />
        <button onClick={startTimer} >Start</button> <br /><br />
        <button onClick={Reset} >Reset</button>
    </div>
</>
  )
}

export default Counter