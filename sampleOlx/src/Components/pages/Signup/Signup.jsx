import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../../contextAPI/Loadingcontext";
import Loading from "../../Loading/Loading";
function Signup() {
  const {isLoading,setIsLoading}=useContext(LoadingContext)
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [pass_error,set_pass_error]=useState('')
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);




  const handleText = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //from validation 

    if(!formdata.username.trim() || !formdata.email.trim() || !formdata.password.trim()){

      setMessage('give all feilds')
      return
    }

    //email validation 

    const checker=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!checker.test(formdata.email)){
    return;
    }
    

    if (formdata.password.length < 6) {
      set_pass_error('please enter minmun 6 characters')
      return;
    }
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 700);
   
    try {
      const response = await axios.post("http://localhost:8000/api/data/signup", formdata);
      setMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-h-screen">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Sign Up to OLX</h2>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handleText}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleText}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleText}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            {pass_error&&<p className="mt-4 text-left text-red-500" >{pass_error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg px-4 py-3 font-medium hover:bg-black-200 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account? {" "}
            <Link to="/login" className="text-blue-600 font-medium hover:text-blue-700">
              Login
            </Link>
          </p>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          {isLoading&&<Loading/>}
        </div>
      </div>
    </div>
  );
}

export default Signup;
