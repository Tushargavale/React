import './Login.css'


function Input({ref,placeholder,onchange,name,key,label,value ,type='text'}){


    return(<>
    <div className="InputField">
    <input 
    className='inp'
    type={type} 
    onChange={(e)=>onchange(e)}
    placeholder={placeholder}
    ref={ref} 
    name={name}
    value={value}
    key={key}    
    />   
    
        
    </div>    
    </>)
}


export default Input