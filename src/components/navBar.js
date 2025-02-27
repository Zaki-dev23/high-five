import React from 'react';
import { Link } from 'react-router-dom';
import "./css/navbar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="logo">
        <img className="image" src="https://img.freepik.com/vecteurs-libre/creation-logo-degrade-pieces-automobiles_23-2149460685.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
