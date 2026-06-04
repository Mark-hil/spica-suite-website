import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCamera, FiGlobe, FiVideo, FiPenTool, FiCalendar, FiCompass, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './Services.css';

const SERVICES = [
  {
    id: 'media', icon: <FiCamera size={28}/>, color: '#1a3fa8', light: '#dbeafe',
    title: 'Media Coverage',
    tagline: 'Every moment, perfectly captured.',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85',
    desc: 'Professional photography and videography for weddings, corporate events, product launches, and brand shoots. State-of-the-art equipment, cinematic editing, and a creative eye that tells your story.',
    features: ['Event & Wedding Photography','Corporate Videography','Aerial Drone Footage','Same-Day Highlight Reels','Professional Photo Retouching','Photo Album Design'],
    gallery: [
      'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=400&q=80',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80',
    ],
  },
  {
    id: 'web', icon: <FiGlobe size={28}/>, color: '#2563eb', light: '#eff6ff',
    title: 'Website Design',
    tagline: 'Sites that work as hard as you do.',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=85',
    desc: 'Modern, blazing-fast, mobile-first websites crafted to represent your brand beautifully. We combine stunning design with smart UX to turn visitors into loyal customers.',
    features: ['Custom Web Design','E-commerce Solutions','SEO Optimization','CMS Integration','Performance Tuning','Ongoing Maintenance'],
    gallery: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80',
    ],
  },
  {
    id: 'stream', icon: <FiVideo size={28}/>, color: '#7c3aed', light: '#f5f3ff',
    title: 'Live Streaming',
    tagline: 'Your event, live to the world.',
    img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=900&q=85',
    desc: 'Seamless HD live streaming for hybrid events, conferences, church services, and virtual ceremonies. Multi-platform broadcasting with real-time graphics and professional production.',
    features: ['Multi-Platform Broadcasting','HD & 4K Production','Real-Time Lower Thirds','Live Audience Interaction','Recording & Cloud Archive','Technical Support On-Site'],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80',
      'https://images.unsplash.com/photo-1508997449629-303059a039c0?w=400&q=80',
    ],
  },
  {
    id: 'design', icon: <FiPenTool size={28}/>, color: '#db2777', light: '#fdf2f8',
    title: 'Graphic Design',
    tagline: 'Visuals that speak before you do.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=85',
    desc: 'Bold, purpose-driven graphic design that elevates your brand. From logo systems to full brand identity kits, social media content, and print collateral that leaves a lasting mark.',
    features: ['Logo & Brand Identity','Social Media Graphics','Flyers & Posters','Business Cards & Stationery','Signage & Banners','Packaging Design'],
    gallery: [
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80',
      'https://images.unsplash.com/photo-1612833609470-4d1081a9b6b2?w=400&q=80',
    ],
  },
  {
    id: 'events', icon: <FiCalendar size={28}/>, color: '#ea580c', light: '#fff7ed',
    title: 'Event Planning',
    tagline: 'Flawless from first detail to final moment.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85',
    desc: 'Comprehensive event management for weddings, corporate galas, birthdays, and conferences. We handle venue sourcing, décor, catering coordination, and on-day logistics so you can be present.',
    features: ['Weddings & Receptions','Corporate Galas & Conferences','Birthday & Anniversary Events','Venue Sourcing & Décor','Vendor Coordination','On-Day Event Management'],
    gallery: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80',
    ],
  },
  {
    id: 'travel', icon: <FiCompass size={28}/>, color: '#0891b2', light: '#ecfeff',
    title: 'Travel & Tour',
    tagline: 'The world is closer than you think.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85',
    desc: 'Curated travel packages and end-to-end tour management for individuals, couples, and groups. From West African getaways to international adventures — we handle everything seamlessly.',
    features: ['International Travel Packages','Group Tour Management','Hotel & Flight Booking','Visa Assistance','Custom Itinerary Planning','Tour Guide Services'],
    gallery: [
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80',
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&q=80',
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState('media');
  const svc = SERVICES.find(s => s.id === active);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="services-page">
      {/* HERO */}
      <div className="svc-hero">
        <div className="svc-hero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80)' }} />
        <div className="svc-hero__overlay" />
        <div className="container svc-hero__content">
          <span className="pill-tag">What We Offer</span>
          <h1>Six Ways We Help<br />You Shine</h1>
          <p>Every service is crafted with one mission — creating unforgettable, magical moments.</p>
        </div>
      </div>

      {/* TAB NAV */}
      <div className="svc-tabs">
        <div className="container svc-tabs__inner">
          {SERVICES.map(s => (
            <button
              key={s.id}
              className={`svc-tab ${active === s.id ? 'svc-tab--active' : ''}`}
              style={{ '--tc': s.color }}
              onClick={() => setActive(s.id)}
            >
              <span className="svc-tab__icon" style={{ background: active === s.id ? s.color : s.light, color: active === s.id ? 'white' : s.color }}>
                {s.icon}
              </span>
              <span className="svc-tab__label">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SERVICE DETAIL */}
      <section className="svc-detail" key={svc.id}>
        <div className="container svc-detail__layout">
          {/* Left — info */}
          <div className="svc-detail__info">
            <div className="svc-detail__icon" style={{ background: svc.color }}>
              {svc.icon}
            </div>
            <span className="svc-tagline" style={{ color: svc.color }}>{svc.tagline}</span>
            <h2 className="svc-detail__title">{svc.title}</h2>
            <p className="svc-detail__desc">{svc.desc}</p>
            <div className="svc-features">
              {svc.features.map(f => (
                <div key={f} className="svc-feature">
                  <FiCheckCircle color={svc.color} size={17} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="svc-cta-btn" style={{ background: svc.color, borderColor: svc.color }}>
              Enquire About {svc.title} <FiArrowRight />
            </Link>
          </div>

          {/* Right — images */}
          <div className="svc-detail__images">
            <div className="svc-main-img-wrap">
              <img src={svc.img} alt={svc.title} className="svc-main-img" />
              <div className="svc-main-img__overlay" style={{ background: svc.color }} />
            </div>
            <div className="svc-gallery">
              {svc.gallery.map((url, i) => (
                <div key={i} className="svc-gallery__img">
                  <img src={url} alt={`${svc.title} ${i+1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="all-svc-section">
        <div className="container">
          <div className="all-svc-header">
            <span className="pill-tag">Full Suite</span>
            <h2>All Our Services at a Glance</h2>
          </div>
          <div className="all-svc-grid">
            {SERVICES.map(s => (
              <button key={s.id} className={`all-svc-card ${active === s.id ? 'all-svc-card--active' : ''}`} style={{ '--ac': s.color }} onClick={() => { setActive(s.id); window.scrollTo({ top: 380, behavior: 'smooth' }); }}>
                <div className="all-svc-card__img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                  <div className="all-svc-card__overlay" style={{ background: s.color }} />
                </div>
                <div className="all-svc-card__body">
                  <div className="all-svc-card__icon" style={{ background: s.color }}>{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-bottom-cta">
        <div className="svc-bottom-cta__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80)' }} />
        <div className="svc-bottom-cta__overlay" />
        <div className="container svc-bottom-cta__inner">
          <h2>Not sure which service you need?</h2>
          <p>Talk to us — we'll help you figure out the perfect package for your goals.</p>
          <Link to="/contact" className="cta-gold-btn">Let's Talk <FiArrowRight /></Link>
        </div>
      </section>
    </div>
  );
}
