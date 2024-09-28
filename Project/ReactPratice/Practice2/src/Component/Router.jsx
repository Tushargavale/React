import React from "react";

import {createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import App from "../App";
import HomePage from "./PublicComponent/HomePage";
import ContactPage from "./PublicComponent/ContactPage";
import LoginPage from "./PublicComponent/LoginPage";
import SignupPage from "./PublicComponent/SignupPage";
import Profiles from "./PrivateComponent/Profiles";
import Profile from "./PrivateComponent/Profile";

const Router=createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<App></App>}  >
    <Route path="" element={<HomePage></HomePage>}  ></Route>
    <Route path="/Contact" element={<ContactPage></ContactPage>}  ></Route>
    <Route path="/Login" element={<LoginPage></LoginPage>}  ></Route>
    <Route path="/Signup" element={<SignupPage></SignupPage>}> </Route>
    <Route path="/Profile" element={<Profiles></Profiles>}  ></Route>
    <Route path="/Profile/:username" element={<Profile></Profile>} ></Route>
   </Route>
))




export default Router