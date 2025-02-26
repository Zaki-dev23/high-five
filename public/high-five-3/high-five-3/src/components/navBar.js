// src/components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <header className="header">
      <div  className="logo">
        <img className="image"  src="/logoo.png" alt="" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Blogs</a></li>
          <li><a href="/services">About US</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <button className="btn">Subscribe</button>
      </nav>
    </header>
  );
}

export default NavBar;
