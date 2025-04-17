import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


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
  <li>
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
      About
    </NavLink>
  </li>
  <li>
    <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
      Services
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
      Contact
    </NavLink>
  </li>
</ul>

        
      </div>
    </nav>
  );
};

export default Navbar;