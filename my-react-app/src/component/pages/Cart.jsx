import React from 'react'
import './cart.css'
import { useCart } from '../../context/CartContext'
import { getAccessorieImgUrl } from '../../Show/accessorie-img-show';
import { getEquipmentImgUrl } from '../../Show/equipment';
import { getSupplementImgUrl } from '../../Show/supplement';
export const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  let total=0;
  cartItems.forEach(item=> {
    total=total+item.quantity*item.Price
  });
  const tax=total*0.2;
  const discount=total*0.5;
  const totalPrice=total+tax-discount;
  return (
    <div className='cartpage'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={
      item.category === 'Accessorie'
      ? getAccessorieImgUrl(item.pic)
      : item.category === 'Equipment'
      ? getEquipmentImgUrl(item.pic)
      : item.category === 'Supplement'
      ? getSupplementImgUrl(item.pic)
      : ''
  }
  alt={item.title}
  width={100}
  height={100}
/>

            <div  className='items'>
              <h3 className='title'>{item.title}</h3>
              <p className='price'>{` Price: $${item.Price}`}</p>
              <div className="quantities">
                <button className='minus' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button className='curr'>{item.quantity }</button>
                <button className='plus' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className='del' onClick={() => removeFromCart(item.id)}> Remove</button>
            </div>
          </div>
        ))
       
      )}
       <div className="calculateTotalPrice">
        <p>Total: ${total.toFixed(2)}</p>
        <p>TaxOf(2%): ${tax.toFixed(2)}</p>
        <p>DiscountOf(5%): ${discount.toFixed(2)}</p>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button>Check Out</button>
       </div>
       
    </div>
  );
};
