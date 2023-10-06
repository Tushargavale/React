
import '../../CSS_File/ProductCard.css'

function CourseCard({data,fun,deletee})
{
  
    return <div id='DIV' >
       
        <div className="product-card"  >
      <h2>{data.Title}</h2>
      <p>{data.Description}</p>
      <p>Price: ${data.Price}</p>
      <p>Published: {data.Published}</p>
      <div id='button-container'  >
        {fun? <button className='btn' onClick={()=>{fun(data)}} >Update</button> :null}
        {deletee?  <button className='btn' onClick={()=>{deletee(data)}} >Delete</button>:null}
        </div>
    </div>
    </div>
}
export default CourseCard
