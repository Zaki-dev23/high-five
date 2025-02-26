import React from 'react';
import { Link } from 'react-scroll';
import "./css/navbar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="logo">
        <img className="image" src="/logoo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <button className="btn">Subscribe</button>
    </header>
  );
}

export default NavBar;
