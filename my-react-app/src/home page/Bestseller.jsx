import React from 'react'
import { Bestsell } from './bestsell'
import { BestsellImgUrl } from '../Show/bestsell-img'
import './bestsell.css'
function Bestseller() {
  return (
    <div className='bestsell'>
      {
        Bestsell.map(item =>(
         <div key={item.id}>
          <img src={BestsellImgUrl(item.image)} alt="" />
          <span className="sale-badge">{item.title}</span>
           <p>name:{item.name}</p>
           <p> price:{`$${item.Price}`}</p>
           
           <button>Add to cart</button>
          </div>
        ))
      }

    </div>
  )
}

export default Bestseller