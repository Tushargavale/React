

function Form({submit})
{ return <div>
    
        <form >
            <label >Name:</label>
            <input type="text" id="name" name="name" /><br/><br/>
    
            <label >ID:</label>
            <input type="text" id="id" name="id" /><br/><br/>
    
            <label >Company:</label>
            <input type="text" id="company" name="company" /><br/><br/>
    
            <label >Location:</label>
            <input type="text" id="location" name="location" /><br/><br/>
            <input type="button" value="CLICKKK"  onClick={submit} />
            
        </form>
   
    </div> 

}

export default Form