import React, { useEffect } from 'react';
import Hero from './components/hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import Feature from './components/feature.jsx'
import Counter from './components/counter.jsx'
import Footer from './components/footer.jsx'
import Blog from './components/ourblog.jsx'
import Products from './components/ourproducts.jsx'
import Service from './components/ourservice.jsx'
import Team from'./components/team.jsx'
import Testimonials from './components/testimonials.jsx'
// import WOW from 'wowjs';
// import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';





import './App.css'

function App() {
  // useEffect(() => {
  //   new WOW.WOW().init();
  // }, []);
  
  return (
    <>
      <Hero/> 
      <Feature/>
      <AboutUs/>
      <Counter/>
      <Service/>
      <Products/>
      <Blog/> 
      <Team/> 
      <Testimonials/> 
      <Footer/>
    </>
  )
}

export default App
