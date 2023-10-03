
import '../style/card.css'
import { useNavigate } from 'react-router-dom'; 
function ProductCard(props) {

    let user=props.res
   let navigator=useNavigate()
    console.log("***********************************")
    console.log(user)
   
   
    


   return (
    <div>
    <div className="product-card"  >
      <h2> Title: {user.Title}</h2>
      <p>Description : {user.Description}</p>
      <p>Price: ${user.Price}</p>
      <p>Admin: {user.admin.ID}</p>
    </div>
   
    </div>
  );
}

export default ProductCard;
