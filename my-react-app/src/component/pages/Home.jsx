import React from 'react'
import Bestseller from '../../home page/Bestseller'
import Footer from '../../home page/footer'
import { Routes,Route } from 'react-router-dom'
import ShopByCatagory from '../../home page/ShopByCatagory'
import Hero from '../../home page/hero'
import Testimonial from '../../home page/testimonial'

export const Home = () => {
  return (
    <>
      <Hero />
      <Bestseller />
      <ShopByCatagory/>
      <Testimonial />
      < Footer />
    </>
  )
}

