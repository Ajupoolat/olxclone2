import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadingContext } from "../../../contextAPI/Loadingcontext";
import Loading from "../../Loading/Loading";
// import "./Login.css";

const Login = ({ setisauth }) => {
  
  const {isLoading,setIsLoading}=useContext(LoadingContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [email_error,set_emial_error]=useState('')
  const navigate = useNavigate();
  //setting loading state

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

   if(!formData.email.trim()||!formData.password.trim()){
    setMessage('give all feilds')
    return;
   }
   
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
      
    try {
      const response = await axios.post(
        "http://localhost:8000/api/data/login",
        formData
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Save token to localStorage
        console.log(formData)

        setisauth(true); // Update authentication status
        navigate("/home"); // Navigate to home page
      }
      setMessage(response.data.message); // Set success/error message
    } catch (error) {
      console.log(formData)
      console.error("Error:", error);
      setMessage(error.response?.data?.message); // Set error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {/* Login Form */}
          <div className="text-center mb-8">
            <div className="text-2xl font-bold text-teal-800 flex items-center justify-center">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                fill-rule="evenodd"
              >
                <path
                  className="rui-w4DG7"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Login to OLX</h2>
          </div>

          {/* Email Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg px-4 py-3 font-medium hover:bg-black-200 transition-colors"
            >
              Login
            </button>
          </form>

          {/* Toggle Login/Register */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>

          {/* Display success/error message */}
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
                {isLoading && <Loading/>}

        </div>
      </div>
    </div>
  );
};

export default Login;