import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import ProductCard from "../../Content/Card";
import { ProductContext } from "../../../contextAPI/Addproductcontext";

const Home = ({setisauth}) => {
const {products,fetchProducts,setproducts}=useContext(ProductContext)
  useEffect(()=>{
  
    fetchProducts()
  },[products])

const textref=useRef()



  return (
    <> 
    <Navbar setisauth={setisauth}  />
  <div className="w-full min-h-screen bg-gray-50">     
        <nav className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-6 overflow-x-auto py-3 no-scrollbar">
              <button className="text-gray-800 font-medium whitespace-nowrap flex items-center">
                ALL CATEGORIES
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                Cars
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                Motorcycles
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                Mobile Phones
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                For Sale: Houses & Apartments
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                Scooters
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                Commercial & Other Vehicles
              </a>
              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-gray-800"
              >
                For Rent: Houses & Apartments
              </a>
            </div>
          </div>
        </nav>

       
        <div >
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.slice().reverse().map((product,index) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;