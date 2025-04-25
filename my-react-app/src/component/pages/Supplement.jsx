import React from 'react'
import { getsupplements } from '../../Pictures/Supplements'
import { getSupplementImgUrl } from '../../Show/supplement'
import { useCart } from '../../context/CartContext'
export const Supplement = () => {
  const supplement=getsupplements();
  const {addToCart}=useCart();
  return (
    <div>
      {
        supplement.map(item=>(
         <li key={item.id}>
          <img src={getSupplementImgUrl(item.pic)} alt="" />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{`$${item.Price}`}</p>
          <button onClick={() =>addToCart({
          id:`${item.id}-${'Supplement'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Supplement'  })}>Add to Cart</button>
         </li>
        ))
      }
    </div>
  )
}

