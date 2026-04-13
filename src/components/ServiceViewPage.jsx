import React, { useState } from 'react';
import './ServiceViewPage.css';

const ServiceViewPage = () => {
  const [activeCategory, setActiveCategory] = useState('Photoshoot');

  const viewData = {
    Photoshoot: {
      title: "Cinematic Photoshoots",
      desc: "Editorial and portrait sessions designed to capture your strongest visual identity.",
      images: [
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1537367680745-973a68d35582?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560243563-062bff001d68?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1932&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1495594059084-33752409b909?q=80&w=2017&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    Events: {
      title: "Grand Event Coverage",
      desc: "Documenting moments with a cinematic approach. Preserving the true essence of your gatherings.",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472653431118-c97962b4adad?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505373633513-e4798c8c679b?q=80&w=1854&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514525253361-b8748ee65a5b?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1429962714451-bb934ec748e7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460973270921-2a5c40026e6f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461908835382-38f39a754b2a?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=2010&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    Frames: {
      title: "Frames & Fine Art",
      desc: "Turning memories into physical art using museum-grade materials and bespoke framing.",
      images: [
        "https://images.unsplash.com/photo-1580136574482-c7d3136ac214?q=80&w=2070&auto=format&fit=crop", // Frame on wall
        "https://images.unsplash.com/photo-1518998053574-53eeec096894?q=80&w=1974&auto=format&fit=crop", // Gallery wall
        "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop", // Framed art
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop", // Framed painting
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop", // Hanging frame
        "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1974&auto=format&fit=crop", // Artistic frames
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2012&auto=format&fit=crop", // Frame detail
        "https://images.unsplash.com/photo-1577083164850-29f1d51d71fd?q=80&w=2018&auto=format&fit=crop", // Multi frames
        "https://images.unsplash.com/photo-1582201943022-de9f381f26cc?q=80&w=1974&auto=format&fit=crop", // Gallery
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=1974&auto=format&fit=crop", // Framed photo
        "https://images.unsplash.com/photo-1584727638096-042c4533da8a?q=80&w=1974&auto=format&fit=crop", // Hanging art
        "https://images.unsplash.com/photo-1520420953077-d22529d337c4?q=80&w=1974&auto=format&fit=crop", // Frame studio
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1858&auto=format&fit=crop", // Classic frame
        "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=2070&auto=format&fit=crop", // Art wall
        "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1887&auto=format&fit=crop", // Minimalist frame
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1888&auto=format&fit=crop", // Books & Frames
        "https://images.unsplash.com/photo-1576016770956-debb6349df83?q=80&w=2052&auto=format&fit=crop", // Museum frame
        "https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=2070&auto=format&fit=crop", // Abstract frame
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1974&auto=format&fit=crop", // Artist frame
        "https://images.unsplash.com/photo-1553531384-397c80973a0b?q=80&w=2070&auto=format&fit=crop"  // Interior frames
      ]
    }
  };

  const categories = Object.keys(viewData);

  return (
    <div className="service-view-page">
      <div className="container section-padding">
        <div className="view-header reveal">
          <span className="subtitle">Project Albums</span>
          <h1>{viewData[activeCategory].title}</h1>
          <div className="title-divider"></div>
          <p>{viewData[activeCategory].desc}</p>
        </div>

        <div className="view-controls reveal">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`view-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="album-container">
          <div className="album-grid">
            {viewData[activeCategory].images.map((img, idx) => (
              <div key={`${activeCategory}-${idx}`} className="album-item reveal">
                <div className="album-img-wrapper">
                  <img src={img} alt={`${activeCategory} work ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="view-footer-actions reveal">
          <a href="#contact" className="btn-primary">Inquire About {activeCategory}</a>
          <a href="#/" className="btn-back-link">Return to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceViewPage;
