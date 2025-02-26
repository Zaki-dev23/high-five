
import React from 'react';
import NavBar from '../components/navBar'; 
import About from '../components/aboutUs';
import HeroSection from '../components/heroSec';


function Landing() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
    </div>
  );
}

export default Landing;
