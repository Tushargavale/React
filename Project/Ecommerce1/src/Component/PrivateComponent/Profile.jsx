
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllProduct } from "../../../Redux/ThunkReducer/productAPI"
import { useDispatch,useSelector } from "react-redux"
const Profile=()=>{

  const dispatch=useDispatch()
    const [item,setItem]=useState([])

    useEffect(()=>{
     dispatch(getAllProduct({page:1,limit:30}))
    },[])

return(
    <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {item.map((item, index) => {
    return <CartItem key={index} {...item} />;
  })}
</div>
    </>
)

}

export default Profile





import React from 'react';

// const CartItem = ({ mainImage, name, description, subImages }) => {
//   return (
//     <div className="border border-gray-300 p-5 mb-5 rounded-lg text-center w-72">
//       {/* Main Image */}
//       <img src={mainImage.url} alt={name} className="w-full h-auto rounded-lg" />

//       {/* Name */}
//       <h2 className="text-xl font-bold my-3">{name}</h2>

//       {/* Description */}
//       <p className="text-gray-600 text-sm mb-3">{description}</p>

//       {/* Sub Images */}
//       <div className="flex justify-center gap-2 mt-3">
//         {subImages.map((subImage, index) => (
//           <img 
//             key={index} 
//             src={subImage.url} 
//             alt={`Sub ${index}`} 
//             className="w-12 h-12 object-cover rounded-md" 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CartItem;


const CartItem = ({ mainImage, name, description, subImages }) => {
  return (
    <div className="border border-gray-300 p-5 mb-5 rounded-lg text-center w-72">
      {/* Main Image */}
      <img src={mainImage.url} alt={name} className="w-full h-48 object-cover rounded-lg" />

      {/* Name */}
      <h2 className="text-xl font-bold my-3">{name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">{description}</p>

      {/* Sub Images */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {subImages.map((subImage, index) => (
          <img 
            key={index} 
            src={subImage.url} 
            alt={`Sub ${index}`} 
            className="w-12 h-12 object-cover rounded-md" 
          />
        ))}
      </div>
    </div>
  );
};