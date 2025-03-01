
import { useState } from 'react'
import './Login.css'
import axios from 'axios'
export default function Login(){

    const [user,setUser]=useState({
        username:"",
        password:""
    })

    
 
    return(<>
    <div className="container">
        <div className="title">Login</div>
        <div className="content">
            <form>


                <div className="userdetails">
                    <div className="input-box">
                        <span>userName</span>
                        <input type="text" placeholder='username'   />
                    </div>
                </div>

                <div className="userdetails">
                    <div className="input-box">
                        <span>userName</span>
                        <input type="text" placeholder='username'   />
                    </div>
                </div>

                <div className="btn">
                    <button>Submit</button>
                </div>


            </form>
        </div>
    </div>
    </>)
}