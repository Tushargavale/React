
import {Routes,Route} from "react-router-dom"
import WelcomePage from "./Admin/WelcomePage"
import LoginForm from "./Admin/LoginForm"
import Error from "./Admin/Error"
import AdminHomePage from "./Admin/AdminHomePage"
import ShowAllCourses from "./Admin/ShowAllCourses"
import NewCourseaddForm from "./Admin/newCourseaddForm"
import CoursesForUpdate from "./Admin/CoursesForUpdate"
import CardUpdateForm from "./Admin/cardUpdateForm"

function Routr()
{
    return <div>
        <Routes>
            <Route path="/" element={<WelcomePage></WelcomePage>} ></Route>
            <Route path="/LoginForm" element={<LoginForm></LoginForm>} ></Route>
            <Route path="/Error" element={<Error></Error>} ></Route>
            <Route path="/AdminHomePage" element={<AdminHomePage></AdminHomePage>} ></Route>
            <Route path="/ShowAllCourses" element={<ShowAllCourses></ShowAllCourses>} ></Route>
            <Route path="/NewCourseaddForm" element={<NewCourseaddForm></NewCourseaddForm>} ></Route>
            <Route path="/CoursesForUpdate" element={<CoursesForUpdate></CoursesForUpdate>} ></Route>
            <Route path="/cardUpdateForm" element={<CardUpdateForm></CardUpdateForm>} ></Route>

        </Routes>
    </div>
}

export default Routr