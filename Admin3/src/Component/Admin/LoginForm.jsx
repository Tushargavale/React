import { useEffect, useState } from 'react';
import '../../CSS_File/LoginForm.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginForm()
{
    let navigate=useNavigate()
    let [user,setUser]=useState({
        ID:"",
        Pass:""
    })
    
    useEffect(()=>{
        if(user.ID && user.Pass)
        {
            axios.post('http://localhost:3001/adminlogin',user).then((res)=>{
                               localStorage.setItem('Token',JSON.stringify(res.data.Token))
               localStorage.setItem('Authorize',true)
            //    axios.defaults.headers.common['authentication']=JSON.parse(localStorage.getItem('Token'))
               navigate('/Login',{state:res.data.Token})
               console.log(res.data)
            }).catch((err)=>{
                console.log(err.response.data)
            })
        }
    },[user])

function submit()
{
    let id=document.getElementById('username').value 
    let pass=document.getElementById('password').value
    setUser({
        ID:id,
        Pass:pass
    })
   
}

function goback()
{
    navigate('/')
}

    return <div>
        
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label >Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label >Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <input type="button" value="Login" className='btn-login' onClick={submit} /> <br />
         <input type="button" value="back" className='btn-back' onClick={goback} />
        
        </form>
      </div>
    
    </div>
}

export default LoginForm