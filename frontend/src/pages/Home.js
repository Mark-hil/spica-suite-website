import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiCamera, FiGlobe, FiVideo, FiPenTool, FiCalendar, FiCompass,
  FiArrowRight, FiCheckCircle, FiPlay, FiPause
} from 'react-icons/fi';
import './Home.css';

const HERO_SLIDES = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80', label: 'Event Planning', sub: 'Weddings & Ceremonies' },
  { url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80', label: 'Media Coverage', sub: 'Photography & Videography' },
  { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80', label: 'Travel & Tour', sub: 'Explore the World' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80', label: 'Live Streaming', sub: 'Broadcast Anywhere' },
];

const SERVICES = [
  { icon: <FiCamera />, title: 'Media Coverage', desc: 'Professional photography & videography for every occasion.', color: '#1a3fa8', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80' },
  { icon: <FiGlobe />, title: 'Website Design', desc: 'Modern, fast websites that convert visitors to clients.', color: '#2563eb', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
  { icon: <FiVideo />, title: 'Live Streaming', desc: 'Crystal-clear live streams reaching audiences worldwide.', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80' },
  { icon: <FiPenTool />, title: 'Graphic Design', desc: 'Bold visuals and branding that leave a lasting impression.', color: '#db2777', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
  { icon: <FiCalendar />, title: 'Event Planning', desc: 'End-to-end management creating magical memories.', color: '#ea580c', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
  { icon: <FiCompass />, title: 'Travel & Tour', desc: 'Curated travel experiences tailored just for you.', color: '#0891b2', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
];

const STATS = [
  { value: '200+', label: 'Events Covered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '6', label: 'Core Services' },
  { value: '5★', label: 'Average Rating' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 4500);
    }
    return () => clearInterval(timerRef.current);
  }, [playing]);

  useEffect(() => {
    const els = document.querySelectorAll('.service-card, .stat-card, .gallery-img');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const goSlide = i => { setSlide(i); setPlaying(false); };

  return (
    <div className="home">
      <section className="hero" aria-label="Hero">
        <div className="hero__slides">
          {HERO_SLIDES.map((s, i) => (
            <div key={i} className={`hero__slide ${i === slide ? 'hero__slide--active' : ''}`} style={{ backgroundImage: `url(${s.url})` }} />
          ))}
        </div>
        <div className="hero__overlay" />
        <div className="container">
          <div className="hero__content">
          <span className="section-tag hero__tag">Welcome to Spica Suite Consult</span>
          <h1 className="hero__title">
            Creating <span className="hero__accent">Unforgettable</span><br />and Magical Moments
          </h1>
          <p className="hero__sub">
            From stunning media coverage and live streaming to event planning and travel. We bring your vision to life with creativity and precision.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn-primary hero__btn">Our Services <FiArrowRight /></Link>
            <Link to="/contact" className="hero__btn-ghost">Get a Quote</Link>
          </div>
          <div className="hero__trust">
            {['Media Coverage', 'Event Planning', 'Live Streaming', 'Travel & Tour'].map(s => (
              <span key={s} className="trust-pill"><FiCheckCircle /> {s}</span>
            ))}
          </div>
        </div>
      </div>
        <div className="hero__controls">
          <button className="hero__play-btn" onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
          </button>
          {HERO_SLIDES.map((s, i) => (
            <button key={i} className={`hero__dot ${i === slide ? 'hero__dot--active' : ''}`} onClick={() => goSlide(i)} aria-label={s.label}>
              <span className="dot-label">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="hero__counter">
          <span className="hero__counter-cur">{String(slide + 1).padStart(2, '0')}</span>
          <span className="hero__counter-sep" />
          <span className="hero__counter-tot">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Everything You Need,<br />All in One Place</h2>
            <p className="section-sub">Six powerful services designed to elevate your brand, events, and experiences.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="service-card" style={{ '--card-color': s.color, animationDelay: `${i * 0.08}s` }}>
                <div className="service-card__img-wrap">
                  <img src={s.img} alt={s.title} className="service-card__img" loading="lazy" />
                  <div className="service-card__img-overlay" style={{ background: s.color }} />
                  <div className="service-card__icon-badge" style={{ background: s.color }}>{s.icon}</div>
                </div>
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to="/services" className="service-card__link">Learn more <FiArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container gallery-layout">
          <div className="gallery-text">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Moments We've<br />Made Unforgettable</h2>
            <p style={{ color: 'var(--gray)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
              From intimate weddings to large corporate productions, our team has delivered flawless experiences across Ghana and beyond.
            </p>
            {['Award-winning creative team', 'End-to-end service delivery', 'On-time, on-budget execution', 'Trusted by 150+ clients'].map(p => (
              <div key={p} className="gallery-point"><FiCheckCircle color="#1a3fa8" size={18} /><span>{p}</span></div>
            ))}
            <Link to="/contact" className="btn-primary" style={{ marginTop: 32 }}>Start Your Project <FiArrowRight /></Link>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((url, i) => (
              <div key={i} className="gallery-img" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={url} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80)' }} />
        <div className="cta-band__overlay" />
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to create something extraordinary?</h2>
            <p>Let's bring your vision to life. Reach out today.</p>
          </div>
          <Link to="/contact" className="cta-band__btn">Start Your Project <FiArrowRight /></Link>
        </div>
      </section>
    </div>
  );
}
