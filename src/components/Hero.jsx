import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="vignette"></div>

      <div className="hero-content container reveal">
        {/* Viewfinder elements */}
   

        <div className="content-left grunge-branding">
          <div className="hero-logo-wrapper">
            <h1 className="hero-brush">DEVIL</h1>
            <h2 className="hero-brush-sub">STUDIO</h2>
          </div>
          {/* <p className="hero-subtext-clean">Professional Photography</p> */}
          
          <div className="hero-btns-pill">
            <a href="#contact" className="btn-pill">Book Now</a>
            <a href="#portfolio" className="btn-pill">Portfolio</a>
          </div>
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <span className="scroll-text">Explore</span>
        <div className="scroll-bar">
          <div className="scroll-dot"></div>
        </div>
      </div> */}

      <a
        href="https://wa.me/916374981284"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <div className="wa-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-2.32 0-4.591.542-6.521 1.57l-.468.249-3.235-.847.864 3.149-.273.435c-1.129 1.791-1.725 3.867-1.725 6.007 0 6.131 5.002 11.123 11.155 11.123 2.973 0 5.762-1.149 7.857-3.237a11.054 11.054 0 0 0 3.255-7.886c0-6.131-5.023-11.123-11.209-11.123zm6.307 15.688a8.847 8.847 0 0 1-6.307 2.62c-2.457 0-4.767-.741-6.68-2.146l-.48-.352-2.333.61.624-2.273-.383-.609a8.825 8.825 0 0 1-1.353-4.708c0-4.885 3.993-8.86 8.903-8.86a8.834 8.834 0 0 1 6.307 2.618 8.784 8.784 0 0 1 2.61 6.242 8.78 8.78 0 0 1-2.61 6.308zm-2.025-2.78c-.33-.165-1.954-.964-2.256-1.074-.303-.11-.523-.165-.743.165-.22.33-.854 1.074-1.047 1.32-.192.247-.384.275-.714.11a5.071 5.071 0 0 1-1.637-1.006 5.625 5.625 0 0 1-1.132-1.408c-.192-.33-.021-.509.144-.674.148-.148.33-.385.495-.577l.33-.44c.11-.22.055-.413-.028-.577-.082-.165-.743-1.787-1.018-2.433-.264-.648-.528-.55-.743-.55-.192 0-.413-.028-.633-.028s-.578.083-.881.413c-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.55 5.623 4.975.783.336 1.396.536 1.871.688.786.25 1.498.214 2.06.13.627-.094 1.927-.786 2.199-1.54.275-.754.275-1.403.192-1.54-.082-.14-.296-.22-.627-.385z" />
          </svg>
          <span className="wa-dot"></span>
        </div>
      </a>
    </section>
  );
};

export default Hero;
