import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      num: "01",
      title: "Photoshoot",
      desc: "Cinematic professional photography including portraits, high-fashion shoots, and editorial sessions with a dark, bold aesthetic.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
      img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      num: "02",
      title: "Events",
      desc: "Capturing the raw energy and emotion of your most significant celebrations — from intimate gatherings to grand spectacles.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "03",
      title: "Frames",
      desc: "Exclusive collection of fine-art framed prints, curated wall installations, and bespoke artistic collections for any space.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="title-center reveal">
          {/* <span className="eyebrow">What We Do</span> */}
          <h2>Our Services</h2>
          <div className="title-divider"></div>
          <p>Premium coverage for those who walk in the light and dance in the dark.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-img-container">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-details-simple">
                <div className="service-header-simple">
                  <h3>{service.title}</h3>
                  <div className="service-icon-minimal">{service.icon}</div>
                </div>
                <p className="service-desc-simple">{service.desc}</p>
                <div className="service-actions-simple">
                  <a href="#contact" className="btn-service-book">Book Now</a>
                  <a href="#/view" className="btn-service-view">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
