import {Routes,Route} from 'react-router-dom'
import WelcomePage from './Admin/WelcomePage'
import LoginForm from './Admin/LoginForm'
import Login from './Admin/Login'
import ShowCourses from './Admin/ShowCourses'
function Router()
{
    return <div>
        <Routes>
            <Route path='/' element={<WelcomePage></WelcomePage>} ></Route>
            <Route path='/LoginForm' element={<LoginForm></LoginForm>} ></Route>
            <Route path='/Login' element={<Login></Login>} ></Route>
          
            <Route path='/showCourses' element={<ShowCourses></ShowCourses>} ></Route>
        </Routes>
    </div>
}

export default Router