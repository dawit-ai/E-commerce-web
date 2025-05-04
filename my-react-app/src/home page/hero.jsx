import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
function Hero() {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
   const imgStyle={
    with:'100%',
    height:'100%',
    objectFitf:'containe'
   };
   const imgContainer={
    width:'100%',
    height:'470px',
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItem:'center',
    paddingTop:'20px',
     backgroundColor: '#000'
   }
  return (
    <Carousel  swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    customTransition="all .5 linear"
    transitionDuration={500}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
      <div style={imgContainer}>
        <img src="banner.png" alt="" style={imgStyle} />
      </div>
      <Link to='/accessorie' >
      <div style={imgContainer}>
        <img src="acce.png" alt="" style={imgStyle} />
      </div>
      </Link>
      <Link to='/equipment' >
      <div style={imgContainer}>
        <img src="equip.png" alt="" style={imgStyle} />
      </div>
      </Link>
      <Link to='/supplemnt' >
      <div style={imgContainer}>
        <img src="suppl.png" alt="" style={imgStyle} />
      </div>
      </Link>
      </Carousel>

  )
}
export default Hero