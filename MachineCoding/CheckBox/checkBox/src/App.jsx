import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const templet={
    all:false,
    a:false,
    b:false,
    c:false,
  }

  
  const [checkboxvalue,setCheckboxvalue]=useState(templet)

  useEffect(()=>{






  },[checkboxvalue])
  const style={
    display:'flex',flexDirection:'row'
  }

    const handler=(e)=>{
    const {name,checked}=e.target 
    let temp={...checkboxvalue}
    
    // All -> true for all 
    
    if(name=='all')
    {
      for(let key in temp)
      {
        temp[key]=checked
      }
      setCheckboxvalue(temp)
    }else{
      temp={...temp,[name]:checked}
        
      let top=true
      for(let key in temp){
        if(key=='all') continue;
        if(!temp[key])
          top=false;``
      } 
      temp={...temp,['all']:top}
      setCheckboxvalue(temp)  
 
    }
 }


  return (
    <>
   
   <div 
    className="checkbox"
    style={{display:'flex', flexDirection:'column' }}   
  >



 <div className="item" style={style} >
    <input type="checkbox" name="all" checked={checkboxvalue.all} onChange={(e)=>handler(e)} />
    <label>All</label>
 </div>
      
 <div className="item" style={style} >
   <input type="checkbox" name="a" checked={checkboxvalue.a} onChange={(e)=>handler(e)} />
   <label>A</label>
 </div>

<div className="item" style={style} >
   <input type="checkbox" name="b" checked={checkboxvalue.b} onChange={(e)=>handler(e)} />
   <label>B</label>
</div> 

<div className="item" style={style} >
   <input type="checkbox" name="c" checked={checkboxvalue.c} onChange={(e)=>handler(e)} />
   <label>C</label>
</div>


</div>
    </>
  )
}

export default App
