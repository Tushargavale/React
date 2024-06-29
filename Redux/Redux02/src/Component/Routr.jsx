import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import { Home } from './Home'
import { Home2 } from './Home2'
export const Routr=()=>{


    return(<>
    <Routes>
        <Route path='/' element={<Login></Login>}  ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/home2' element={<Home2></Home2>}  ></Route>
    </Routes>
    </>)
}