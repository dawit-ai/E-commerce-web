import React from 'react';
import { getEquipment } from '../../Pictures/Equipment';
import { getEquipmentImgUrl } from '../../Show/equipment';
import { useCart } from '../../context/CartContext';
export const Equipment = () => {
  const equipment=getEquipment();
  const {addToCart}=useCart();
  return <>
{
  equipment.map(item =>(
   <li key={item.id}>
    <img src={getEquipmentImgUrl(item.pic)} alt="" />
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <p>{`$${item.Price}`}</p>
    <button onClick={() =>addToCart({
          id: `${item.id}-${'Equipment'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Equipment'  })}>Add to Cart</button>
   </li>
  ))
}
  </> 
};

