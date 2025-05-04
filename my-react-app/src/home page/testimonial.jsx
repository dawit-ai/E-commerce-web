import React from 'react'
 import './testimonial.css';
function Testimonial() {
  return ( <>
     <div className='Testimonial-title' ><h3>Our custemer says...</h3></div>
    <div className='testimonial'>
      <div className="pro-1 profile">
        <img src="davidlaid.jpg"alt="" />
        <h4> <span>Mr</span> davidlaid</h4>
        <p> I bought the adjustable bench and power rack combo from this store, and I’m seriously impressed! Solid build, easy to assemble, and it turned my home gym into a professional setup. Highly recommend for anyone serious about training."</p>
      </div>
      <div className="pro-2 profile">
        <img src="ashtonhall.jpg" alt="" />
        <h4> <span>Mr</span> ashtonhall</h4>
        <p className='para'> "The gym gloves and resistance bands I ordered are top quality! They’re comfortable, durable, and exactly what I needed to level up my workouts. Fast delivery too — will definitely shop here again."</p>
      </div>
      <div className="pro-3 profile" >
        <img src="cbum.jpg" alt="" />
        <h4> <span>Mr</span> cbum</h4>
        <p> "I've been using their whey protein and multivitamins for a month now, and I already feel the difference in my energy and recovery. Trusted products and great customer support!"</p>
      </div>
    </div>
    </>
  )
}

export default Testimonial