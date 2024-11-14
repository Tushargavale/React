import { createBrowserRouter ,createRoutesFromElements ,Route, Routes } from "react-router-dom";
import App from "../App";

import HomePage from "../Component/Page/HomePage";
import ContactPage from "../Component/Page/ContactPage";
import LoginPage from "../Component/Page/LoginPage"
import SignupPage from "../Component/Page/SignupPage";

import AllProductsPage from "../Component/Page/AllProductsPage";
import ProtectedRoute from "../Component/Protected";


export const Routers=createBrowserRouter(createRoutesFromElements(
    <Route element={<App/>} path="/" >
    <Route path="" element={<HomePage></HomePage>}  ></Route>
    <Route path="/Contact" element={<ContactPage></ContactPage>}  ></Route>
    <Route path="/Login" element={<LoginPage></LoginPage>}  ></Route>
    <Route path="/Signup" element={<SignupPage></SignupPage>}> </Route>
  
  {/* Protected Route's */}
    <Route path="/Products" element={<ProtectedRoute Children={AllProductsPage} > </ProtectedRoute>}  ></Route>

        
    </Route>
))