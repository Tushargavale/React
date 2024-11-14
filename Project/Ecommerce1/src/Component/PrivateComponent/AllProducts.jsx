
import { useDispatch,useSelector } from "react-redux"
import { getAllProducts } from "../../../Redux/ThunkReducer/productAPI"
import { useEffect, useState } from "react"
import { getProduct } from "../../../Redux/Feture/productSlice"
import Pagination from "../PublicComponent/Paginarion"
const AllProducts=()=>{

   
    const [limit,setLimit]=useState(16)
    const {products,length}=useSelector((state)=>state.products)
    let [page,setPage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts({page,limit}))
        console.log(products[0])
        document.documentElement.scrollTop = 0
    },[page,limit])

const changePage=(page)=>{
  setPage(page)
}




     return(<>
    <div className='flex flex-col justify-center bg-gray-100'>
  <div className='flex justify-between items-center px-20 py-5'>
   
  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
    {
    products.length>0?<>
      {products.map((item,key)=>{
        return  <CartItem key={key} {...item}  ></CartItem>
      })}    
    </>:<h1>Loading.....</h1>
    }
  </div>
</div>

<Pagination changePage={changePage} currentPage={page} totalPages={length} ></Pagination>


    </>)
}

export default AllProducts




const CartItem = ({ mainImage, name, description, subImages, price, stock }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const [clicked, setClicked] = useState(false);     // State to track clicks

  return (
    <div className="border border-gray-300 p-5 mb-5 rounded-lg text-center w-72 h-full flex flex-col justify-between      " onMouseEnter={()=>setIsHovered(false)}  >
      {/* Main Image */}
      <img src={mainImage.url} alt={name} className="w-full h-40 object-cover mb-4 rounded" />

      {/* Item Name */}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      {/* Item Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Price */}
      <div className="text-lg font-bold text-gray-900 mb-2">${price}</div>

      {/* Stock Status */}
      <div className={`text-sm mb-4 ${stock > 0 ? "text-green-500" : "text-red-500"}`}>
        {stock > 0 ? `${stock} in stock` : "Out of stock"}
      </div>

      {/* Sub Images */}
      <div className="flex justify-center mb-4 space-x-2">
        {subImages.map((img, index) => (
          <img key={index} src={img.url} alt={`${name} thumbnail ${index}`} className="w-12 h-12 object-cover rounded" />
        ))}
      </div>

      {/* Add to Cart / Remove from Cart Buttons */}
      <div className="mt-auto">
        {stock > 0 ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2">
            Add to Cart
          </button>
        ) : (
          <button className="bg-gray-400 text-white py-2 px-4 rounded w-full cursor-not-allowed" disabled>
            Out of Stock
          </button>
        )}
       
      </div>
    </div>
  );
};



  /** <div className="flex justify-center items-center min-h-screen" >
          {products.length>0? 
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
    </div>
    <Pagination changePage={changePage} currentPage={page} totalPages={length} ></Pagination>
  </div>
: <h1>Loading.....</h1> }
    </div> */