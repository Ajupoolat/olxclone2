import React, { useContext, useState } from "react";
import { ProductContext } from "../../contextAPI/Addproductcontext";
// import Loading from "../Loading/Loading";

const AddProduct = ({setDisplayAdd}) => {

  const [productName,setProductName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState(0);
  const [address,setAddress]=useState("")
  const [image,setImage]=useState(null)
  const [error,seterror]=useState('')
  const [deserror,setdeserror]=useState('')
  const [price_error,set_price_error]=useState('')
  const [address_error,set_address_error]=useState('')
  const [image_error,set_image_error]=useState(null)
  const {addproduct}=useContext(ProductContext)



  const handleSubmit=async(e)=>{
    e.preventDefault(); // Prevent form from refreshing

    //form valdation 
    if(productName.trim()===""){
   
      seterror('give the productName it is required')
      return;
    }else{
      seterror('')
    }

    if(description.trim()===''){
      setdeserror('description field is required')
      return;
    }else if(description.length<10){
      setdeserror('must give 10 words for description')
      return;
    }else{
      setdeserror('')
    }

    if(price.trim()===''){

      set_price_error('price field is required')
      return;
    }else{
      setPrice('')
    }

    if(address.trim()===''){

      set_address_error('address is required')
      return;
    }else{

      setAddress('')
    }

    if(image===null){
      set_image_error('the image is must')
      return;
    }else{
      set_image_error('')
    }


    const formdata=new FormData();
    formdata.append("productName", productName);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("address", address);
    formdata.append("image", image);
    console.log(formdata)

    
   setDisplayAdd(false)
    addproduct(formdata)
  }

  return (
    <div>
      {/* <Loading isLoading={false} /> */}
<div className="z-20 fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
  <div
    className="bg-white p-6 rounded-lg w-1/3 max-h-[90vh] overflow-y-auto"
    style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
  >
    <h2 className="text-xl font-bold mb-4">Add Product</h2>

    {/* Form Starts Here */}
    <form onSubmit={handleSubmit}>
      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          name="productName"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}

        />
      </div>
      {error&&<p className=" -mt-3 text-left text-sm font-thin  text-red-500">{error}</p>}

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter product description"
          style={{ resize: "none" }}
          value={description}
          onChange={(e) =>setDescription(e.target.value)}

        />
      </div>
      {deserror&&<p className=" -mt-3 text-left text-sm font-thin  text-red-500">{deserror}</p>}

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      {price_error&&<p className=" -mt-3 text-left text-sm font-thin  text-red-500">{price_error}</p>}

      {/* Address */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <textarea
          name="address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter address"
          style={{ resize: "none" }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}

        />
      </div>
      {address_error&&<p className=" -mt-3 text-left text-sm font-thin  text-red-500">{address_error}</p>}

      {/* Image Upload with Cropper */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
        </label>
        <input
          type="file"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setImage(e.target.files[0]);
            console.log('the image'+e.target.files[0])
          }
           
          }
          required

          

        />
      </div>
      {image_error&&<p className="-mt-3 text-left text-sm font-thin  text-red-500" >{image_error}</p>}

    

      {/* Modal Buttons */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => setDisplayAdd(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </div>
    </form>
    {/* Form Ends Here */}
  </div>
</div>
    </div>
  );
};

export default AddProduct;