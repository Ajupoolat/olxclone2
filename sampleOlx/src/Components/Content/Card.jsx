import React, { useEffect, useState } from "react";
import { Heart} from "lucide-react";
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  const [islike,setislike]=useState(false)

  const handlelike=()=>{

    setislike(!islike)
  }
  return (
    // <Link to={`/products/${product._id}`}>
      <div className="bg-white m-2 fle shadow-md overflow-hidden w-60 border">
      {/* Product Image */}
    
      <div className="relative">
        <Link to={`/products/${product._id}`}>
        <img
          src={`http://localhost:8000/${product.productImage}`}
          alt="Product"
          className="w-full h-45 object-cover"
        />
        </Link>
        
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md" >
          <Heart onClick={handlelike} className={`${islike ? "text-red-500" : "text-gray-500"} hover:text-red-500`}
        size={20} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">₹ {product.price}</h2>
        <p className="text-gray-600 truncate">
          {product.description}
        </p>

        {/* Location and Time */}
        <div className="text-sm text-gray-500 mt-2 flex justify-between">
          <p>{product.address}</p>
          
        </div>
      </div>
      
    </div>
   
    // </Link>
      
  );
};

export default ProductCard;
