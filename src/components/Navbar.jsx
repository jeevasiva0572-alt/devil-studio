import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPath }) => {
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

  const handleNavClick = (e, target) => {
    setMenuOpen(false);

    // If it's a page-level route, let the hashchange handle it
    if (['#/portfolio', '#/about', '#/view'].includes(target)) return;

    // Prevent default anchor behavior and manually handle scrolling/navigation
    e.preventDefault();

    if (['#/portfolio', '#/about', '#/view'].includes(currentPath)) {
      // Navigate to home first
      window.location.hash = '#/';
      
      // Wait for page transition then scroll
      setTimeout(() => scrollToSection(target), 100);
    } else {
      // Already on home, just scroll
      scrollToSection(target);
    }
  };

  const scrollToSection = (target) => {
    const id = target.replace('#/', '').replace('#', '');
    if (!id || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => { window.location.hash = '#/'; window.scrollTo(0, 0); }}>
          DEVIL<span>STUDIO</span>
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#/" onClick={(e) => handleNavClick(e, '#/')} className={currentPath === '#/' ? 'active-link' : ''}>Home</a></li>
          <li><a href="#/portfolio" onClick={(e) => handleNavClick(e, '#/portfolio')} className={currentPath === '#/portfolio' ? 'active-link' : ''}>Our Creations</a></li>
          <li><a href="#/about" onClick={(e) => handleNavClick(e, '#/about')} className={currentPath === '#/about' ? 'active-link' : ''}>About</a></li>
          {/* <li><a href="#booking" className="btn-nav-glow" onClick={(e) => handleNavClick(e, '#booking')}>Book Now</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
