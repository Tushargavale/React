import { useState ,useEffect,useCallback,useRef, useLayoutEffect} from "react";

function useThrottle(fn,delay=500){

  const lastEx=useRef(Date.now())
  const fnRef=useRef(fn)

  useEffect(()=>{
    console.log('Function Ref is changed')
      fnRef.current=fn
  },[fn])


  const [throttledFn]=useState(()=>{

    
    return (...arg)=>{
      console.log('Running')
      const now=Date.now()
      if(now-lastEx.current>=delay)
      {
        fnRef.current(...arg)
        lastEx.current=now
      }
    }
  })


  return throttledFn;
}



export default useThrottle











