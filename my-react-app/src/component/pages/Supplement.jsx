import React from 'react'
import { getsupplements } from '../../Pictures/Supplements'
import { getSupplementImgUrl } from '../../Show/supplement'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'
export const Supplement = () => {
  const supplement=getsupplements();
  const {addToCart}=useCart();
  const [sortBy, setSortBy]=useState("");
      const supplementSort=[...supplement].sort((a,b)=>{
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
    <div className='supplement'>
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
        supplementSort.map(item=>(
         <div key={item.id}>
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
         </div>
        ))
      }
    </div>
  )
}

