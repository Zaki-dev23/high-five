
import React from 'react';
import NavBar from '../components/navBar'; 
import About from '../components/aboutUs';
import HeroSection from '../components/heroSec';
import Rapport from '../components/Rapport';



function Landing() {
  return (
    <div>
      
      {/* <HeroSection /> */}
      <NavBar />
      <HeroSection />
      <About />
      <Rapport />
    </div>
  );
}

export default Landing;