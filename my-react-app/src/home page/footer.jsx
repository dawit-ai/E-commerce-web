import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { Routes,Route } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-section'>
     <div className="catagories">
      <h1>Our Product Categories</h1>
      <Link to='/Accessorie'> Gym Accessories</Link>
      <Link to='/Equipment'>  Gym Equipments</Link>
      <Link to='/Supplement'> Supplements</Link>
     </div>
    <div className="imortant Links">
      <h1>imortant Links</h1>
    <Link to='/aboutUs'> About us</Link>
      <Link to='/fAQS'>  FAQS</Link>
      <Link to='/privacy'> Pirvacy Policy</Link>
      <Link to='/term'> Term of Service</Link>
      <Link to='/returnfundpolicy'> Refund Policy</Link>
      <Link to='/conatactUs'>Contact Us </Link>
    </div>
    <div className="socialAndNewsLetter">
      <div className='news'>
        <h1>Subscribe to any update</h1>
      <input type="email" className='newsletter' name='email' placeholder='your email' />
      <button>Subscribe</button>
      </div>
     <div className="info">
     <FaPhoneSquareAlt /> +251940343586
     <MdAttachEmail /> <a href="mailto:dawitdawitk@gmail.com"> dawitdawitk@gmail.com</a>
     </div>
     <div className="media">
     <FaGithub /> 
     <FaLinkedin />
     <FaXTwitter />
     <FaInstagramSquare />
     </div>
     <div className="payment">
     <p> <img src="payment.png"  alt="" width={40}/> 100% Safe & Secure payments</p>
     <img src="Telebirr.png" alt=""  width={100}/>
     <img src="paypal.png" alt="" width={100}/>
     <img src="master card.png" alt="" width={100} />
     <img src="visa.png" alt=""  width={100}/>
     </div>
    </div>
    </div>
   
  )
  
}

export default Footer