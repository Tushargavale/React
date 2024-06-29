import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FetchData } from '../Feature/DataSlice'
import { VerifyUser } from '../Feature/UserSlice'
export const Home=()=>{
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

    const FUN=()=>{
     Navigation('/home2')
    }

  


    return(<>
    
    <br /><br />
    <button onClick={FUN}  >go to HOME2</button>
    <br /><br /><br /><br />
  
    
    <h1>WELCOME TO HOEM</h1>
    </>)
}