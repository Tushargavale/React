
import React, { useEffect, useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";
import authservice from "../../Appwrite/Auth";
import { createUser } from "../../Redux/authAPI";
import { useDispatch,useSelector } from "react-redux";


const Signup = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [user,setUser]=useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const Auth=useSelector((state)=>state.user.status)

  const formHandler=(e)=>{
    
    const {name,value}=e.target
    
    setUser({...user,[name]:value})
   
  }

  useEffect(()=>{
    if(Auth){
      navigate('/profile')
    }
      
  },[Auth,navigate])
  

  const submitForm=()=>{
    if(user.confirmPassword!==user.password)
      alert('password and confirm not matched')
    else{
      const usr={
        username:user.fullName,
        email:user.email,
        password:user.password
      }
      console.log(usr)
     dispatch(createUser(usr))
      
setUser({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
    }
    





  }


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <div className="form" style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={user.fullName}
          onChange={(e) => formHandler(e)}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
            onChange={(e) => formHandler(e)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
        onChange={(e) => formHandler(e)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
         onChange={(e) => formHandler(e)}
          style={styles.input}
          required
        />
        <button type="submit" onClick={submitForm} style={styles.button}>Sign Up</button>
      </div>
      <p style={styles.loginText}>
        Already have an account? <NavLink href="#" style={styles.link}>Login</NavLink>
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
   
    backgroundColor: "white",
      marginTop: "70px",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
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
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  loginText: {
    marginTop: "10px",
    fontSize: "14px",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
  },
};

export default Signup;



