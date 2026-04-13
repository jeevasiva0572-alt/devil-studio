import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, category: 'Wedding Card', price: '₹45/unit', src: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=2070&auto=format&fit=crop', title: 'Royal Gold Invitation' },
    { id: 2, category: 'Business Card', price: '₹500/100pcs', src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=2070&auto=format&fit=crop', title: 'Minimalist Professional' },
    { id: 3, category: 'Frames', price: 'From ₹1,200', src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop', title: 'Teak Wood Gallery Frame' },
    { id: 4, category: 'Greeting Card', price: '₹120/unit', src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1887&auto=format&fit=crop', title: 'Hand-painted Birthday' },
    { id: 5, category: 'Wedding Card', price: '₹65/unit', src: 'https://images.unsplash.com/photo-1620761823093-8e50b691079d?q=80&w=2070&auto=format&fit=crop', title: 'Floral Elegance' },
    { id: 6, category: 'Business Card', price: '₹800/100pcs', src: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop', title: 'Matte Black Premium' },
    { id: 7, category: 'Greeting Card', price: '₹150/unit', src: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop', title: 'Modern Anniversary' },
    { id: 8, category: 'Frames', price: 'From ₹2,500', src: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1858&auto=format&fit=crop', title: 'Ornate Vintage Gold' }
  ];

  const filteredImages = filter === 'All' 
    ? images 
    : filter === 'Card'
    ? images.filter(img => img.category.includes('Card'))
    : images.filter(img => img.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImg.id);
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImg(filteredImages[newIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImg.id);
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImg(filteredImages[newIndex]);
  };

  return (
    <section id="portfolio" className="portfolio section-padding container">
      <div className="title-center reveal">
        <span className="subtitle">Premium Collection</span>
        <h2>Our Creations</h2>
        <div className="title-divider"></div>
        <p>Premium quality prints, bespoke cards, and masterpieces designed to last a lifetime.</p>
      </div>

      <div className="portfolio-filters reveal">
        {['All', 'Card', 'Frames'].map(cat => (
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
                <span className="item-price">{img.price}</span>
                <h3>{img.title}</h3>
                <p className="item-cat">{img.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="close-btn-simple" onClick={() => setSelectedImg(null)} aria-label="Close">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <button className="nav-btn-simple prev" onClick={handlePrev} aria-label="Previous">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button className="nav-btn-simple next" onClick={handleNext} aria-label="Next">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img key={selectedImg.id} src={selectedImg.src} alt={selectedImg.title} className="lightbox-img-fade" />
            <div className="lightbox-info">
              <div className="info-header">
                <div>
                  <span className="price-tag">{selectedImg.price}</span>
                  <h3>{selectedImg.title}</h3>
                  <p>{selectedImg.category}</p>
                </div>
                <a 
                  href={`https://wa.me/919488263031?text=I am interested in ${selectedImg.title} (${selectedImg.category})`} 
                  className="btn-primary order-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
