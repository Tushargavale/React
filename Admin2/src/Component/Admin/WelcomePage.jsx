import { useNavigate } from 'react-router-dom';


function WelcomePage()
{
    
    const navigate = useNavigate();
    return <div>
    <h1>Welcome to Course Selling Website...</h1>
    <button onClick={()=>{navigate("/LoginForm")}} >Admin Login</button>
    </div>
}

export default WelcomePage








