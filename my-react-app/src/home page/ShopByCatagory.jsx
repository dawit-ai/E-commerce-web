import React from 'react'
import { NavLink } from 'react-router-dom'
function ShopByCatagory() {
  return (
    <div>
      <h3>shop by catagory</h3>
      <ul>
      <li><NavLink to="/accessorie"  className={({ isActive }) => (isActive ? "active" : "")} >Accessorie</NavLink></li>
        <li><NavLink to="/equipment" className={({ isActive }) => (isActive ? "active" : "")} >Equipment</NavLink></li>
        <li><NavLink to="/supplement" className={({ isActive }) => (isActive ? "active" : "")}>Supplement</NavLink></li>
      </ul>
    </div>
  )
}

export default ShopByCatagory