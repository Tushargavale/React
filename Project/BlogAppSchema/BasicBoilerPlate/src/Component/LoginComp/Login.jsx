import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login as LoginDispatcher } from "../../Redux/authAPI";
import { useEffect } from "react";
import { fetchUSer } from "../../Redux/authAPI";
const Login = () => {
  const navigate=useNavigate()

let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUSer())
  },[navigate])

    const  [user,setUser]=useState({
        username:'',
        password:''
    })

    const state=useSelector((state)=>state.user.status)

    useEffect(() => {
      // console.log(state)
     if(state)
      navigate('/cart')
    }, [state,navigate])
    
  

    const SubmitHandler=()=>{
        console.log(user)
        let obj={
          email:user.username,
          password:user.password
        }
        setUser({username:'',password:''})
        dispatch(LoginDispatcher(obj))
    }

    const handler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
   }


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.div}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={(e) => handler(e)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => handler(e)}
          style={styles.input}
          required
        />
        <div style={styles.extraOptions}>
          <a href="#" style={styles.link}>Forgot Password?</a>
        </div>
        <button onClick={SubmitHandler} type="submit" style={styles.button}>Login</button>
      </div>
      <p style={styles.signupText}>
        Don't have an account? <a href="#" style={styles.link}>Sign up</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "100vh",
    backgroundColor: "white",
 marginTop: "70px",
  },
  heading: {
    marginBottom: "20px",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "10px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  extraOptions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  signupText: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Login;
