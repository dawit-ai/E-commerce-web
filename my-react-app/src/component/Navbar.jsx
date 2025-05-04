import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import dave from '../assets/dave.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
import { getAccessories } from '../Pictures/Accessorie';
import { getEquipment } from '../Pictures/Equipment';
import { getsupplements } from '../Pictures/Supplements';
function Navbar() {
  const {setSearch}=useContext(SearchContext);
  const [suggestion, setSuggestion]=useState([]);
  const [input,setInput]=useState('');
  const navigate=useNavigate();
  const products=[...getAccessories(),...getEquipment(),...getsupplements()];
  const handlechange=event=>{
    const value=event.target.value;
    setInput(value)
    setSearch(value)
    if(value.trim()==''){
      setSuggestion([]);
      return;
    }
  const filtered=products.filter(p=> p.title.toLowerCase().includes(value.toLowerCase())).slice(0,5)
  setSuggestion(filtered);
  };
  const handleKeyDown=event=>{
    if(event.key==='Enter'){
      setSuggestion([]);
      navigate('/search')
    }
  }
  const halndleClik=()=>{
    {
      setSuggestion([]);
      navigate('/search')
    }
  }
  const handleSelect=(title)=>{
    setSearch(title);
    setInput(title);
    setSuggestion([]);
    navigate('/search');
  }
  
  const { cartItemCount } = useCart();
  return (<>
    <Link to='/login'  className='registration'><FaUser /> Sign in</Link>
    <div className='nav'>
      <img src={dave} alt="log pic"  className='logo'/>
      <ul>
        <li><NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li> 
        <li><NavLink to="/shop"  className={({ isActive }) => (isActive ? "active" : "")} >Shop</NavLink></li>
      </ul>
      <div  className='search-box'> <label htmlFor="text">
      <input type="text" placeholder='search' id='text' name='text' value={input} onChange={handlechange} onKeyDown={handleKeyDown}/>
        </label> <button onClick={halndleClik}><CiSearch  className='search-icon'/></button>
        {
          suggestion.length>0 &&(
            <ul className="suggestion-list">
              {
                suggestion.map(i=>(
                  <li key={i.id} onClick={()=>handleSelect(i.title)}>{i.title}</li>
                ))
              }
            </ul>
          )
        }
        </div>
        <div><Link to='/cart' className='cart' > <img src={cart}/> {cartItemCount > 0 && (
          <span className="cart-badge">{cartItemCount}</span>
        )}</Link>
        </div>
          
    </div>
    </>
  )
}

export default Navbar
