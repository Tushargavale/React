import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"


function useDebounce(fun,delay=500){
    const funRef=useRef(fun)
    const timeRef=useRef()

    useEffect(()=>{
        funRef.current=fun
    },[fun])


    const [debouncefun]=useState(()=>{
       
        return (...arg)=>{
            if(timeRef.current)
                clearTimeout(timeRef.current)

            timeRef.current=setTimeout(() => {
                    funRef.current(...arg)
            }, delay);
        }

    })

    return debouncefun
}


export default useDebounce

