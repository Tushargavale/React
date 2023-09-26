

function update()
{
    let Name=document.getElementById('name').value
    let ID=document.getElementById('id').value
    let Location=document.getElementById('location').value
    let Company=document.getElementById('company').value
    console.log({Name,ID,Location,Company})
    Remov({Name,ID,Location,Company})
}


function AddData()
{
    return <div>
        <form >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/><br></br>

        <label for="id">ID:</label>
        <input type="text" id="id" name="id" required/><br></br>

        <label for="company">Company:</label>
        <input type="text" id="company" name="company" required/><br></br>

        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required/><br></br>

      
        <input type="button" value="CLICKKK"  onClick={update} />

    </form>
    </div>
}

export default AddData


function Remov(data)
{
    fetch('http://localhost:3000/add',{method:"POST",
    body:JSON.stringify(data),
   headers:{
       "Content-Type":"application/json"
   }
   
   }).then((data)=>data.json()).then((data)=>{
        console.log(data)
      
    })
}