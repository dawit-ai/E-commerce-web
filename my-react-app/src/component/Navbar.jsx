import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import dave from '../assets/dave.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
function Navbar() {
  const { cartItemCount } = useCart();
  return (<>
    <div  className='registration'><FaUser /> Sign in</div>
    <div className='nav'>
      <img src={dave} alt="log pic"  className='logo'/>
      <ul>
        <li><NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li> 
        <li><NavLink to="/shop"  className={({ isActive }) => (isActive ? "active" : "")} >Shop</NavLink></li>
        <li><NavLink to="/accessorie"  className={({ isActive }) => (isActive ? "active" : "")} >Accessorie</NavLink></li>
        <li><NavLink to="/equipment" className={({ isActive }) => (isActive ? "active" : "")} >Equipment</NavLink></li>
        <li><NavLink to="/supplement" className={({ isActive }) => (isActive ? "active" : "")}>Supplement</NavLink></li>
      </ul>
      <div  className='search-box'> <label htmlFor="text">
      <input type="text" placeholder='search' id='text' name='text'/>
        </label><CiSearch  className='search-icon'/></div>
        <div><Link to='/cart' className='cart' > <img src={cart}/> {cartItemCount > 0 && (
          <span className="cart-badge">{cartItemCount}</span>
        )}</Link>
        </div>
          
    </div>
    </>
  )
}

export default Navbar
