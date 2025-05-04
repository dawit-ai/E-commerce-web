import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import  Navbar  from './component/Navbar'
import { Home } from './component/pages/Home'
import { Accessorie } from './component/pages/Accessorie';
import { Shop } from './component/pages/Shop'
import { Supplement } from './component/pages/Supplement'
import { Equipment } from './component/pages/Equipment'
import { Cart } from './component/pages/Cart'
import Login from './authen/login';
import Signup from './authen/Signup';
import AboutUs from './component/pages/About us';
import './App.css'
import FAQS from './component/pages/FAQS';
import Privacy from './component/pages/Privacy';
import Term from './component/pages/Term';
import Returnfundpolicy from './component/pages/Returnfundpolicy';
import ConatactUs from './component/pages/ConatactUs';
import { SearchResult } from './component/pages/SearchResult';
 function  App () {
 const [show, setShow]=useState(true);
 const [cart, setCart]=useState([]);
 const halndleClike=(item)=>{
 console.log(item)
 }
  return (
    <>
    
      <CartProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/accessorie' element={<Accessorie />} />
      <Route path='/equipment' element={<Equipment />} />
      <Route path='/supplement' element={<Supplement />} />
      <Route path='/cart' element={<Cart halndleClike={halndleClike} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aboutUs' element={< AboutUs/>}/>
      <Route path='/fAQS' element={< FAQS/>}/>
      <Route path='/privacy' element={< Privacy/>}/>
      <Route path='/term' element={< Term/>}/>
      <Route path='/returnfundpolicy' element={< Returnfundpolicy/>}/>
      <Route path='/conatactUs' element={< ConatactUs/>}/>
      <Route path='/search' element={<SearchResult />} />
    </Routes>
    
    </CartProvider>
   
    
    </>
  )
}

export default App
