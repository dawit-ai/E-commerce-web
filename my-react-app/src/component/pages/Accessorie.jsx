import React from 'react';
import { getAccessories } from '../../Pictures/Accessorie';
import { getAccessorieImgUrl } from '../../Show/accessorie-img-show';
import { useCart } from '../../context/CartContext';
export const Accessorie = () => {
  const accessorie=getAccessories();
  const {addToCart}=useCart();
  return <>
{
  accessorie.map(item =>(
   <li key={item.id}>
    <img src={getAccessorieImgUrl(item.pic)} alt="" />
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <p>{`$${item.Price}`}</p>
    <button onClick={() =>addToCart({
           id: `${item.id}-${'Accessorie'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Accessorie'  })}>Add to Cart</button>
   </li>
  ))
}
  </> 
};
