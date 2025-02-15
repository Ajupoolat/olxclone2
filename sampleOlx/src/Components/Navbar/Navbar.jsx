import React, { useContext, useState } from "react";
import { Search, Heart, Plus, LogOut } from "lucide-react";
import "./Navbar.css";
import sell_icon from "../../assets/sll-icon.svg";
import olx_logo from "../../assets/olx-logo.svg";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../contextAPI/Loadingcontext";
import Loading from "../Loading/Loading";
import AddProduct from "./AddProduct";

const Navbar = ({setisauth}) => {
  const {isLoading,setIsLoading}=useContext(LoadingContext)
  const [displayAdd,setDisplayAdd]=useState(false)
  const navigate=useNavigate()

  
  const handalelogout=()=>{
    
 setIsLoading(true)
 setTimeout(()=>{
  setIsLoading(false)
 },500)
    localStorage.removeItem("token");
    setisauth(false);
    navigate("/login");

  }

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-800">
        <img src={olx_logo} alt="OLX Logo" />
      </div>

      {/* Location Dropdown */}
      <div className="locationDiv relative flex items-center border rounded-md px-3 py-2 min-w-[200px] mx-2">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <select className="w-full bg-transparent outline-none appearance-none">
          <option>India</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="searchDiv flex-1 relative mx-2">
        <input
          type="text"
          placeholder='Search "Cars"'
          className="w-full px-4 py-2 border rounded-md outline-none"
        />
        <button className="absolute right-0 top-0 h-full px-4 bg-teal-900 text-white rounded-r-md">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-2">
        {/* Language Selector */}
        <select className="bg-transparent outline-none">
          <option>ENGLISH</option>
        </select>

        {/* Favorites */}
        <button className="hover:text-teal-800">
          <Heart className="w-6 h-6" />
        </button>

        {/* Logout */}
        <button className="hover:underline"title="logout" onClick={handalelogout}><LogOut/></button>
        {isLoading&&<Loading/>}

        {/* Sell Button */}
        <div className="relative sell-btn">
          <img
            src={sell_icon}
            alt="Sell Icon"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="cursor-pointer absolute inset-0 flex items-center justify-center text-black text-lg font-bold">
           <button onClick={()=>{setDisplayAdd(!displayAdd)}} className="flex justify-between items-center w-17">SELL <Plus className="w-5 h-5 mr-2"  />
           </button>
           {displayAdd&&<AddProduct setDisplayAdd={setDisplayAdd}/>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;