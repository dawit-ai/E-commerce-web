import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import  Navbar  from './component/Navbar'
import { Home } from './component/pages/Home'
import { Accessorie } from './component/pages/Accessorie';
import { Shop } from './component/pages/Shop'
import { Supplement } from './component/pages/Supplement'
import { Equipment } from './component/pages/Equipment'
import { Cart } from './component/pages/Cart'
import './App.css'
 function  App () {
 const [show, setShow]=useState(true);
 const [cart, setCart]=useState([]);
  return (
    <>
    <Navbar size={Cart.length} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/accessorie' element={<Accessorie />} />
      <Route path='/equipment' element={<Equipment />} />
      <Route path='/supplement' element={<Supplement />} />
      <Route path='/cart' element={<Cart  />} />
    </Routes>
    </>
  )
}

export default App
