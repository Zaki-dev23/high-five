import React from "react";
import "./HeroSection.css"; // Import du fichier CSS

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Contenu */}
      <div className="hero-content">
        <h1>WELCOME TO <br/>  <span> OUR LOCATION CAR</span> BLOG</h1>
        <p>Discover the latest trends and news in the automotive world.</p>
        <a href="#explore" className="hero-button">Explore</a>
      </div>
    </section>
  );
};

export default HeroSection;