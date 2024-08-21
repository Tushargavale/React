import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { Provider } from 'react-redux'

import store from './Store/Store.js'
import {BrowserRouter ,RouterProvider } from 'react-router-dom'   
import AuthLayout from './Components/AuthLayout.jsx'
import Home from './Pages/Home.jsx'
import { Router ,createBrowserRouter } from 'react-router-dom'
import Signup from './Pages/Signup.jsx'
import AddPost from './Pages/AddPost.jsx'
import AllPosts from './Pages/AllPosts.jsx' 
import Post from './Pages/Post.jsx'
import Login from './Pages/Login.jsx'
import EditPost from './Pages/EditPost.jsx'
import Dummy from './Components/Dummy.jsx'







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element:  <Home />,   
        },
        {
            path: "/login",
            element: (
                <AuthLayout Authentication={false}>
                    <Login /> 
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout Authentication={false} >
                    <Signup />   
                 </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout Authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout Authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout Authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
























ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       
      
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
