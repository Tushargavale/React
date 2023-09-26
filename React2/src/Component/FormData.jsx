import Form from "./Form";
import { useState } from "react";

function FormData()
{
    const [name, setName] = useState('');

  // Function to handle form submission
  function fun()
    {
    console.log('===========================')
    let i=document.getElementById('name').value 
    console.log(i)
    setName(i)
    }

    return <div>
        <h1>This is Form</h1>
    <Form submit={fun}></Form>
    <h2>{name}</h2>
    
     </div>

}



export default FormData