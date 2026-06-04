import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import logoImg from '../img/spica-suite.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logoImg} alt="Spica Suite Logo" className="footer__logo-icon" style={{ height: '60px', width: 'auto', objectFit: 'contain', marginBottom: '16px' }} />
            <div>
              <span className="footer__logo-name">SPICA SUITE CONSULT</span>
              <span className="footer__logo-tag">... Creating Unforgettable and Magical Moments</span>
            </div>
          </div>
          <div className="footer__socials">
            <a href="https://tiktok.com" aria-label="TikTok" className="social-link"><SiTiktok /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-link"><FiInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="social-link"><FiFacebook /></a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__links">
          <h4>Our Services</h4>
          <span>Media Coverage</span>
          <span>Website Design</span>
          <span>Live Streaming</span>
          <span>Graphic Design</span>
          <span>Event Planning</span>
          <span>Travel & Tour</span>
        </div>

        <div className="footer__contact">
          <h4>Contact Us</h4>
          <a href="mailto:spicasuiteconsult@gmail.com" className="footer__contact-item">
            <FiMail /> spicasuiteconsult@gmail.com
          </a>
          <a href="tel:+233553386282" className="footer__contact-item">
            <FiPhone /> +233 (0) 553386282
          </a>
          <a href="tel:+233542172880" className="footer__contact-item">
            <FiPhone /> +233 (0) 542172880
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Spica Suite Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
