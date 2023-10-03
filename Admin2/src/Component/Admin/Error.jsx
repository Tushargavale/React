import { useLocation } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function Error()
{
    let navigate=useNavigate()
    const location = useLocation();
    let data=location.state.Error

    return <div>
        Error in Request {data}
        Eror in Req 
        <br/><br></br>
        <button onClick={()=>{ navigate('/LoginForm')}}> Back</button>
        </div>
    
}

export default Error