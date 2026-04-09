import React, { useState } from 'react';
import './Portfolio.css';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, category: 'Wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', title: 'Golden Hour Vows' },
    { id: 2, category: 'Events', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop', title: 'Midnight Carnival' },
    { id: 3, category: 'Frames', src: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=1964&auto=format&fit=crop', title: 'Vibrant Textures' },
    { id: 4, category: 'Wedding', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', title: 'Floral Celebration' },
    { id: 5, category: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop', title: 'Electric Energy' },
    { id: 6, category: 'Frames', src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop', title: 'Artistic Splendor' }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="portfolio" className="portfolio section-padding container">
      <div className="title-center reveal">
        <h2>Portfolio</h2>
        <p>A curated selection of our finest captures and framed masterpieces.</p>
      </div>

      <div className="portfolio-filters reveal">
        {['All', 'Wedding', 'Events', 'Frames'].map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredImages.map((img) => (
          <div key={img.id} className="portfolio-item reveal" onClick={() => setSelectedImg(img)}>
            <img src={img.src} alt={img.title} />
            <div className="portfolio-overlay">
              <div className="overlay-info">
                <span>{img.category}</span>
                <h3>{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="close-btn" onClick={() => setSelectedImg(null)}>
            <X size={32} />
          </button>
          <img src={selectedImg.src} alt={selectedImg.title} />
          <div className="lightbox-info">
            <h3>{selectedImg.title}</h3>
            <p>{selectedImg.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
