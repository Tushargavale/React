import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//const Element=(<a href='https://www.google.com' >click me </a>)


// This is React Method with the Help of babel
const Element=React.createElement('a',{href:'https://www.google.com'},'click me to visit Google')




const App2=React.createElement('h2',{},'Tushar Gavale FRom Bangalore')


console.log(App2)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App></App>

)


