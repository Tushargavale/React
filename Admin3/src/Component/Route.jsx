import {Routes,Route} from 'react-router-dom'
import WelcomePage from './Admin/WelcomePage'
import LoginForm from './Admin/LoginForm'
import Login from './Admin/Login'
import ShowCourses from './Admin/ShowCourses'
import AddNewCourse from './Admin/AddNewCourse'
import Update from './Admin/Update'
import UpdateForm from './Admin/UpdateForm'
function Router()
{
    return <div>
        <Routes>
            <Route path='/' element={<WelcomePage></WelcomePage>} ></Route>
            <Route path='/LoginForm' element={<LoginForm></LoginForm>} ></Route>
            <Route path='/Login' element={<Login></Login>} ></Route>
            <Route path='/AddNewCourse' element={<AddNewCourse></AddNewCourse>} ></Route>
            <Route path='/showCourses' element={<ShowCourses></ShowCourses>} ></Route>
            <Route path='/Update' element={<Update></Update>} ></Route>
            <Route path='UpdateForm' element={<UpdateForm></UpdateForm>} ></Route>
        </Routes>
    </div>
}

export default Router