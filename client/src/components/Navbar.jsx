import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/"><img src='/assets/compress.img.png' alt="logo" className='logo-img' /></a>
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;