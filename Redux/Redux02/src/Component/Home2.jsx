import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { VerifyUser } from '../Feature/UserSlice'
export const Home2=()=>{
const Navigation=useNavigate()
      const user=useSelector((state)=>state.User)
 //     const Data=useSelector((state)=>state.Data)
  const dispatch=useDispatch()



    useEffect(()=>{
     dispatch(VerifyUser())
     console.log(user)
    },[])  
    


    useEffect(()=>{
        console.log(user)
        if(user.state==='fail')
          Navigation('/')
    },[user])


  


    return(<>
    <h1>This Is Second HOME To Component</h1>
    </>)
}