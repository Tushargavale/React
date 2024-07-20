
import axios from 'axios'    
import {useDispatch} from 'react-redux'
import {login} from '../Store/AuthSlice'

// export class API{

// }  
// const API=new API()
// export class API


export async function LoginUser({username,password}){
   
    try {
        const Resp=await axios.post('http://localhost:3000/login',{username,password},{headers:{
            // authorization:"TusharGavaleFromBAnagelore"
          }})
          if(Resp.status===200)
         {
            let Token=Resp.data.Token
            localStorage.setItem('user',JSON.stringify({Token}))
            return Resp

             }
             
             else{
            return false
         }

        
    } catch (error) {
        console.log(error)
        return false
    }
}   



export async function getDoc(user){
    try {
        console.log(user)
        const Resp=await axios.post('http://localhost:3000/getDoc',{},{headers:{
            authorization:user.userData.Token
        }})

        if(Resp.status===200)
            return Resp
        else 
        return false
    } catch (error) {
        console.log(error)
    }
}