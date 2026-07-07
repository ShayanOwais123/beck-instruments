import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBrands from "./components/TrustedBrands";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChoose from './components/WhyChoose'
import ManufacturingProcess from "./components/ManufacturingProcess";
import Certification from './components/Certification'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar />
    <Hero />
    <TrustedBrands />
    <FeaturedCategories />
    <WhyChoose />
    <ManufacturingProcess />
    <Certification />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  ) 
}

export default App
