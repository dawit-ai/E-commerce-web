import React from 'react';
import { getAccessories } from '../../Pictures/Accessorie';
import { getAccessorieImgUrl } from '../../Show/accessorie-img-show';
import { useCart } from '../../context/CartContext';
import './accessorie.css'
export const Accessorie = () => {
  const accessorie=getAccessories();
  const {addToCart}=useCart();
  return <>
{
  accessorie.map(item =>(
   <div key={item.id} className='accessories'>
    <img src={getAccessorieImgUrl(item.pic)} alt="" />
    <h1 className='title'>{item.title}</h1>
    <p className='description'>{item.description}</p>
    <p className='price'>{`$${item.Price}`}</p>
    <button onClick={() =>addToCart({
           id: `${item.id}-${'Accessorie'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Accessorie'  })}>Add to Cart</button>
   </div>
  ))
}
  </> 
};
