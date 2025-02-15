import React, { useEffect, useState } from 'react'
import Home from './Components/pages/Home/Home'
import Login from './Components/pages/Login/Login'
import Signup from './Components/pages/Signup/Signup'
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import ProductDetails from './Components/Content/product';

 

function App() {
 
  const [isauth,setisauth]=useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){

      setisauth(true)
    }
  },[])
  return (
    <div>
      <Router>
      <Routes>
       <Route path='/' element={!isauth?<Navigate to='/login'/>:<Home setisauth={setisauth}/>}/>
       <Route path='/login' element={!isauth ? <Login setisauth={setisauth}/>:<Navigate to='/home'/>}/>
       <Route path='/home' element={!isauth ?<Navigate to='/login'/> :<Home setisauth={setisauth}/>}/>
       <Route path='/products/:id' element={!isauth?<Navigate to='/login'/>:<ProductDetails/>}/>
       <Route path='signup' element={<Signup/>}/>
       </Routes>
    </Router>
    </div>

  )
}

export default App