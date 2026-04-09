import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container about-grid">
        <div className="about-image-side reveal">
          <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop" alt="Studio Cinematic" />
          <div className="about-image-overlay"></div>
        </div>
        
        <div className="about-content reveal">
          <span className="subtitle">The Philosophy</span>
          <h2>Beyond <br />The Lens</h2>
          <div className="about-text">
            <p>
              Devil Studio was born from a desire to capture what others miss. We don't just take pictures; 
              we frame moments that carry the weight of cinematic storytelling.
            </p>
            <p className="emphasis">
              Our aesthetic is rooted in the interplay of light and shadow. We believe that true depth 
              is found in the darkness.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Fire</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Stories Told</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25</span>
              <span className="stat-label">Global Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
