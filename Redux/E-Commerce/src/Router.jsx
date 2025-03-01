
import {Route,Routes} from 'react-router-dom'
import { Home } from './Home'
import HomePage from './Pages/HomePage'
import AllProductPage from './Pages/AllProductPage'
import AllProducts from './AllProducts'
import App from './App'
export const Routers=()=>{
    return(<>
    <Routes>
        <Route path='/' Component={HomePage}  ></Route>
        {/* <Route path='/Home' Component={<Home></Home>}  ></Route> */}
         <Route path='/AllProducts' Component={AllProductPage}></Route>
    </Routes>
    
    
    </>)
}

