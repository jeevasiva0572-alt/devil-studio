import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          DEVIL<span>STUDIO</span>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          {/* <li><a href="#contact" className="btn-nav-glow" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
