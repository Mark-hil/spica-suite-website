import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../img/spica-suite.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={logoImg} alt="Spica Suite Logo" className="logo-icon" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        
         <div>
            <span className="logo-name">SPICA SUITE</span>
            <span className="logo-tag">CONSULT</span>
          </div>
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary navbar__cta">Get in Touch</Link>
        </nav>

        <button className="navbar__hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
}
