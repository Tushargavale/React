import { useEffect, useState } from 'react'

import './App.css'

function App() {
const [data,setData]=useState()
const [lat,setLat]=useState()
const [loc,setLoc]=useState()
//let lat=12.9716    //° N, 78.9629° E
//let loc=77.5946

  useEffect(()=>{
    const fetchData=async()=>{
      
      let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${loc}&appid=bf909b4a90c47e810fc156dc73c0ed75`)
      let resp= await data.json()
      console.log(resp);
      
      setData(resp)      
   
    }
    if(lat&&loc)
    fetchData()
  },[lat,loc])

  const clb=(data)=>{
    console.log(data.coords.latitude)  //longitude
    setLat(data.coords.latitude)
    setLoc(data.coords.longitude)
  }

  useEffect(()=>{
    if(navigator.geolocation)
    {
      let pos=navigator.geolocation.getCurrentPosition(clb)
    }
  },[])
 

  return (
    <>
     {data ? <>
     
      <div className='city-name' >{data.name}</div>
           <div className="description">{`Current Temperature: ${data.main.temp} F`}</div> 
           <div className="description">{`Description: ${data.weather[0].description} F`}</div> 
          <div className="description">{`Max Temperature: ${data.main.temp_max} F`}</div> 
          <div className="description">{`Min Temperature: ${data.main.temp_min} F`}</div> 
          <div className="description">{`Humidity: ${data.main.humidity} F`}</div> 
     
     </>:<h4>...Loading...</h4>}
    </>
  )
}

export default App
