import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <header className="header">
      <div  className="logo">
        <img className="image"  src="https://static.vecteezy.com/system/resources/previews/011/514/549/non_2x/auto-car-concept-logo-design-illustration-free-vector.jpg" alt="" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Blogs</Link></li>
          <li><Link href="/services">About US</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        <button className="btn">Subscribe</button>
      </nav>
    </header>
  );
};

export default Header;