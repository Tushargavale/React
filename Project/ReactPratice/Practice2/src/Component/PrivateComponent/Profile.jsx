
import { useParams } from "react-router-dom"

const Profile=()=>{

    
    const {username}=useParams()
    console.log(username)


return(
    <>
    <h1>Welcome To USer Profile</h1>
    </>
)

}

export default Profile

