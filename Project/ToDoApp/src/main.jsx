import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './Redux/store.js'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Protocted from './Component/P-Component/Protocted.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Home from './Component/P-Component/Home.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import AllblogsPage from './Pages/AllblogsPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import Signup from './Component/FormComponent/Signup.jsx'
import PostPage from './Pages/PostPage.jsx'
import ReadBlog from './Component/ReadBlog.jsx' 
import EditBlog from './Pages/EditBlog.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}  >
      <Route path='' element={<AboutPage></AboutPage>} ></Route>
      <Route path='/Home' element={<Protocted child={<Home></Home>} ></Protocted>} ></Route>
      <Route path='/Login' element={<LoginPage></LoginPage>} ></Route>
      <Route path='/Signup' element={<Signup></Signup>} ></Route>
      <Route path='/Profile' element={<Protocted child={<ProfilePage></ProfilePage>} ></Protocted>} ></Route>
      <Route path='/AllBlogs' element={<Protocted child={<AllblogsPage></AllblogsPage>} ></Protocted>  } ></Route>
      <Route path='/Post' element={<Protocted child={<PostPage></PostPage>} ></Protocted>} ></Route>
     <Route path='/ReadBlog' element={<Protocted child={<ReadBlog></ReadBlog>} ></Protocted>}  ></Route> 
     <Route path='/Edit/:slug' element={<Protocted child={<EditBlog></EditBlog>} ></Protocted>}  ></Route> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(   

  
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} >
    
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
