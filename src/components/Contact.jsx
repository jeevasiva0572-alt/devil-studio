import React from 'react';
import './Contact.css';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding container">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <span className="subtitle">Let's Connect</span>
          <h2 className="luxury-heading">Ready to <br />Frame the Fire?</h2>
          <p className="contact-desc">
            Whether it's a wedding, an editorial shoot, or a custom installation, 
            we're ready to bring your vision to life with cinematic precision.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <p className="detail-value">hello@devilstudio.com</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <p className="detail-value">+1 (555) 000-666</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Studio</span>
              <p className="detail-value">123 Dark Street, Shadow City</p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <div className="input-line"></div>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
            <div className="input-line"></div>
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="4" required></textarea>
            <div className="input-line"></div>
          </div>
          <button type="submit" className="btn-solid-glow">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
