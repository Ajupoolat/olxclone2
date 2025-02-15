import React,{useState,useEffect} from "react";
import { Heart } from "lucide-react";
import backarrow from "../../assets/left-arrow.png";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductDetails = () => {
    const navigate=useNavigate();

    const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [islike,setislike]=useState()

  const handlelike=()=>{

    setislike(!islike)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/data/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

     if (!product) return <div><Loading/></div>;


  return (
    <div className="mt-4 relative max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
    {/* Back Arrow Button */}
    <button onClick={()=>navigate(-1)} className="absolute -left-35 top-3 bg-gray-200 rounded-full shadow-md hover:scale-110 transition-all duration-300 ease-in-out">
      <img src={backarrow} alt="Back" className="w-12 h-12" />
    </button>
  
    {/* Product Image and Details Container */}
    <div className="flex gap-8">
      {/* Product Image */}
      <div className="w-1/2">
        <img src={`http://localhost:8000/${product.productImage}`} alt="Product" className="w-full object-cover rounded-lg" />
      </div>
  
      {/* Product and Seller Info */}
      <div className="w-1/2 mt-6 flex flex-col gap-4">
         <h1  className="text-2xl font-bold">{product.productName}</h1>
        <h2 className="text-2xl font-bold">₹ {product.price}</h2>
        <p className="text-gray-700 text-lg">{product.description}</p>
        <p className="text-gray-500 text-sm">{product.address}</p>
        <Heart onClick={handlelike} className={`${islike?"text-red-500":"text-gray-500"}`} size={20} />
     
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
