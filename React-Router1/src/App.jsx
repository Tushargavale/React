
import './App.css'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import ContactLayout from './Layout/ContactLayout'
import  {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import ContactInfo from './Component/ContactInfo'
import ContactForm from './Component/ContactForm'
import JobsLayout from './Layout/JobsLayout'
import Jobs, { JobsLoader } from './Pages/Jobs'

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>} >
         <Route index element={<Home></Home>}   />
          <Route path='about' element={<About></About>} />     
         
         {/* Here we are using nested route inside the contact path */}
          <Route path='contact' element={<ContactLayout/>} >
                  <Route path='info' element={<ContactInfo/>} />
                  <Route path='form' element={<ContactForm/>} />
          </Route>

          <Route path='product'element={<Product/>} />

          <Route path='jobs' element={<JobsLayout></JobsLayout>} >
            <Route index element={<Jobs/>} loader={JobsLoader} ></Route>
          </Route>

        <Route path='*' element={<h1>Not Found</h1>} />




      </Route>
    )
  )

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
