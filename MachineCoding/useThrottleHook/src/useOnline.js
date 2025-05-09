import React,{useState,useEffect, useRef} from "react"

function isOnline(){
   const [isOnline,setIsOnline]=useState(true)
   useEffect(()=>{
    function handleonline(){
        setIsOnline(true)
    }

    function handleoffline(){
        setIsOnline(false)
    }

    console.log('Inside useeddfr')

    window.addEventListener('online',handleonline)
    window.addEventListener('offline',handleoffline)

    return ()=>{
        window.removeEventListener('online',handleonline)
        window.removeEventListener('offline',handleoffline)
    }
    
   },[])

  
   let item={
    value:isOnline
   }
   console.log('Item Updated')

   


   return item

}



export default isOnline