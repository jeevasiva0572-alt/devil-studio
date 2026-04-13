import React, { useEffect } from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" style={{ paddingTop: '100px', minHeight: '100vh', background: '#050505' }}>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
