import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/navBar';
import About from '../components/aboutUs';
import HeroSection from '../components/heroSec';
import Rapport from '../components/Rapport';
import Footer from "../components/Footer";
import Login from '../components/Login';
import PostsPage from '../components/PostsPage';


function Landing() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/blogs" element={<PostsPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Rapport />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Landing;
