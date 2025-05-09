import { useState } from 'react'
import NavBar from './Component/NavBar'
import './App.css'
import Footer from './Component/Footer'
import Login from './Component/Login'
import Card from './Component/Card'
import { porduct } from './product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div className="flex flex-col h-screen overflow-hidden">
     <div >
       <NavBar />
     </div>
     
      
      {/* Main Content (you can replace with your page content) */}
      <div className="flex-1 overflow-y-auto  bg-blue-50">
        <main  >
        <Card product={porduct} ></Card>
         </main>
      </div>

      <div className='fixed bottom-0 left-0 w-full z-10' >
              <Footer />
      </div>

    </div>
    </>
  )
}

export default App
