import React from 'react';
import { getAccessories } from '../../Pictures/Accessorie';
import { getAccessorieImgUrl } from '../../Show/accessorie-img-show';
import { useCart } from '../../context/CartContext';
import './accessorie.css'
import { useState } from 'react';
export const Accessorie = () => {
  const accessories=getAccessories();
  const {addToCart}=useCart();
  const [sortBy, setSortBy]=useState("");
  const accessorySort=[...accessories].sort((a,b)=>{
    switch(sortBy) {
      case 'Ascending':
      return a.Price-b.Price;
      case 'Descending' :
      return b.Price-a.Price;
      case 'title-asc' :
        return a.title.localeCompare(b.title)
        case 'title-desc' :
        return b.title.localeCompare(a.title)
        default:
          return 0;
    }
    
  })
  return (
  <div className='accessories'>
    <div className="sorts">
      <span>SORT BY</span>
      <select name="sort" className='sort-selector' value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
       <option value="Ascending"> price--Low to high</option>
       <option value="Descending"> price--high to low</option>
       <option value="title-asc"> A-Z</option>
       <option value="title-desc"> Z-A</option>
      </select>
    </div>
{
  accessorySort.map(item =>(
   <div key={item.id} >
    <img src={getAccessorieImgUrl(item.pic)} alt="" />
    <h1 className='title'>{item.title} -- {`$${item.Price}`}</h1>
    <p className='description'>{item.description}</p>
    
    <button onClick={() =>addToCart({
           id: `${item.id}-${'Accessorie'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Accessorie'  })}>Add to Cart</button>
   </div>
  ))
}

</div>
  )
};
