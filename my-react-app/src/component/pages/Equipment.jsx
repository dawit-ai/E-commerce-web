import React from 'react';
import { getEquipment } from '../../Pictures/Equipment';
import { getEquipmentImgUrl } from '../../Show/equipment';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
export const Equipment = () => {
  const equipment=getEquipment();
  const {addToCart}=useCart();
  const [sortBy, setSortBy]=useState("");
    const equipmentSort=[...equipment].sort((a,b)=>{
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
    <div className="equipment">
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
  equipmentSort.map(item =>(
   <div key={item.id}>
    <img src={getEquipmentImgUrl(item.pic)} alt="" />
    <h1>{item.title}-- {`$${item.Price}`}</h1>
    <p>{item.description}</p>
    
    <button onClick={() =>addToCart({
          id: `${item.id}-${'Equipment'}`, 
          title: item.title,
          pic: item.pic,
          Price: item.Price,
          category: 'Equipment'  })}>Add to Cart</button>
   </div>
  ))
}
</div>
  )
};

