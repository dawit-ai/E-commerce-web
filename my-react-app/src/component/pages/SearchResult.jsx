import React, { useContext } from 'react'
import { useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { useCart } from '../../context/CartContext';
import { getAccessories } from '../../Pictures/Accessorie';
import { getEquipment } from '../../Pictures/Equipment';
import { getsupplements } from '../../Pictures/Supplements';
import { getAccessorieImgUrl } from '../../Show/accessorie-img-show';
import { getEquipmentImgUrl } from '../../Show/equipment';
import { getSupplementImgUrl } from '../../Show/supplement';
export const SearchResult = () => {
  const {addToCart}=useCart();
  const {search}=useContext(SearchContext);
   const products=[...getAccessories(), ... getsupplements(),...getEquipment()];
   const filtered=products.filter(p=> p.title.toLowerCase().includes(search.toLowerCase()));
   const getImageUrl = (item) => {
    if (item.category === 'Accessorie') {
      return getAccessorieImgUrl(item.pic);
    } else if (item.category === 'Equipment') {
      return getEquipmentImgUrl(item.pic);
    } else if (item.category === 'Supplement') {
      return getSupplementImgUrl(item.pic);
    }
    return '';
  }
  return (
    <div className='search-result'>
     {
     filtered.length>0 ?(
        filtered.map(item =>(
           <div key={item.id}>
            <img src={getImageUrl(item)} alt={item.title} />

            <h1>{item.title}-- {`$${item.Price}`}</h1>
            <p>{item.description}</p>
            
            <button onClick={() =>addToCart({
                  id: `${item.id}-${item.category}`, 
                  title: item.title,
                  pic: item.pic,
                  Price: item.Price,
                  category:item.category  })}>Add to Cart</button>
           </div>
      )) ) :
       ( <p> no product found</p>)
     }
    </div>
  )
}
