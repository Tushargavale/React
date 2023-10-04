import '../../CSS_File/CourseSellingWebsite.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function WelcomePage()
{ 
     let navigate=useNavigate()
    function login()
    {
        navigate('/LoginForm')
    }

    function signup()
    {     
           console.log("Signup Button is press")
    }




    return <div>
      <div className="homepage">
        <header>
          <h1>Welcome to the Course Selling Portal</h1>
        </header>
        <main>
          <p>Discover and enroll in courses that suit your interests and goals.</p>
          <div className="buttons">
          <input type="button" value="Login" onClick={login} id='btn' />  <input type="button" value="signup" onClick={signup} id='btn' />
  
          </div>
        </main>
      </div>
    </div>
}

export default WelcomePage