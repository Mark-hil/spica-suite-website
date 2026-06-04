import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiHeart, FiZap, FiArrowRight, FiStar, FiUsers, FiCheckCircle, FiAward } from 'react-icons/fi';
import './About.css';

const TEAM = [
  { name: 'Mr. Achampong Buabeng Jnr', role: 'CEO & Lead Event Planner', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=85', color: '#1a3fa8' },
  { name: 'Mrs. Dorothy Achampong-Buabeng', role: 'Head of Media', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85', color: '#7c3aed' },
  { name: 'Mr. Derrick', role: 'Head of Photography & Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85', color: '#db2777' },
  { name: 'Mr. Edward Adu-Gyamfi', role: 'Head of Travel & Logistics', img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=85', color: '#0891b2' },
  { name: 'Mr. Mark-Hill Ampomah', role: 'I.T Operations Manager', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=85', color: '#ea580c' },
];

const VALUES = [
  { icon: <FiTarget size={24} />, color: '#1a3fa8', title: 'Vision', desc: 'To be the most trusted full-service creative and events consultancy across West Africa and beyond.' },
  { icon: <FiHeart size={24} />, color: '#db2777', title: 'Passion', desc: 'Every project we touch is fuelled by genuine love for crafting beautiful, meaningful experiences.' },
  { icon: <FiZap size={24} />, color: '#ea580c', title: 'Excellence', desc: 'We hold ourselves to the highest standards — in quality, creativity, and client care.' },
  { icon: <FiAward size={24} />, color: '#7c3aed', title: 'Integrity', desc: 'Transparent pricing, honest timelines, and a commitment to delivering exactly what we promise.' },
];

const STATS = [
  { icon: <FiStar size={22} />, value: '5★', label: 'Average Rating' },
  { icon: <FiUsers size={22} />, value: '150+', label: 'Happy Clients' },
  { icon: <FiCheckCircle size={22} />, value: '200+', label: 'Events Delivered' },
  { icon: <FiAward size={22} />, value: '5+', label: 'Years of Excellence' },
];

const MILESTONES = [
  { year: '2019', title: 'Founded', desc: 'Spica Suite Consult launched in Kumasi, Ghana with a focus on event photography and planning.' },
  { year: '2020', title: 'Digital Expansion', desc: 'Added website design and graphic design services, serving 30+ clients in the first year.' },
  { year: '2021', title: 'Live Streaming', desc: 'Launched live streaming services during the pandemic, reaching audiences across three continents.' },
  { year: '2022', title: 'Travel Division', desc: 'Opened our Travel & Tour division, offering curated packages across Africa and beyond.' },
  { year: '2024', title: 'Regional Leader', desc: "Recognized as one of Ghana's top creative consultancies with 150+ satisfied clients." },
];

export default function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(e => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); }), { threshold: .15 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80)' }} />
        <div className="about-hero__overlay" />
        <div className="container about-hero__content">
          <span className="about-pill-tag">Our Story</span>
          <h1>We Are Spica Suite Consult</h1>
          <p>A passionate, purpose-driven team dedicated to creating unforgettable moments for individuals, brands, and businesses across Ghana and beyond.</p>
        </div>
      </div>

      {/* STORY + STATS */}
      <section className="about-story-section">
        <div className="container about-story-layout">
          <div className="about-story__text fade-in">
            <span className="section-pill">Our Story</span>
            <h2>Born from a Love of<br />Creating Memories</h2>
            <p>Spica Suite Consult was founded with a single mission — to provide world-class creative and consultancy services that leave lasting impressions. Based in Kumasi, Ghana, we serve clients across West Africa and the diaspora.</p>
            <p>Our name, <strong>"Spica,"</strong> is the brightest star in the constellation Virgo — a symbol of brilliance, precision, and beauty. Just like that star, we aim to be the brightest light in every project we take on.</p>
            <p>From a two-person startup to a full creative powerhouse with six service lines, every step has been driven by one thing: our clients' smiles when the magic happens.</p>
            <Link to="/contact" className="about-cta-btn">Work With Us <FiArrowRight /></Link>
          </div>
          <div className="about-story__visuals fade-in">
            <div className="story-img-stack">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=85" alt="Event" className="story-img story-img--main" />
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=85" alt="Photography" className="story-img story-img--inset" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band">
        <div className="container stats-band__grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-band-card fade-in">
              <div className="stat-band-card__icon">{s.icon}</div>
              <span className="stat-band-card__val">{s.value}</span>
              <span className="stat-band-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="section-pill">Our Core Values</span>
            <h2>What Drives Everything We Do</h2>
          </div>
          <div className="values-grid">
            {VALUES.map(v => (
              <div key={v.title} className="value-card fade-in">
                <div className="value-card__icon" style={{ background: v.color + '18', color: v.color }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <span className="section-pill dark">Meet the Team</span>
            <h2>The People Behind the Magic</h2>
            <p>A talented, passionate crew that shows up fully for every project.</p>
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="team-card fade-in">
                <div className="team-card__img-wrap">
                  <img src={m.img} alt={m.name} className="team-card__img" loading="lazy" />
                  <div className="team-card__overlay" style={{ background: m.color }} />
                </div>
                <div className="team-card__body">
                  <h4>{m.name}</h4>
                  <span style={{ color: m.color }}>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <div className="timeline-header">
            <span className="section-pill">Our Journey</span>
            <h2>How We Got Here</h2>
          </div>
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`tl-item fade-in ${i % 2 === 0 ? 'tl-item--left' : 'tl-item--right'}`}>
                <div className="tl-card">
                  <span className="tl-year">{m.year}</span>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="tl-dot" />
              </div>
            ))}
            <div className="tl-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-bottom-cta">
        <div className="about-bottom-cta__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80)' }} />
        <div className="about-bottom-cta__overlay" />
        <div className="container about-bottom-cta__inner">
          <h2>Ready to work with us?</h2>
          <p>Let's create something extraordinary together.</p>
          <div className="about-bottom-cta__btns">
            <Link to="/contact" className="cta-gold-btn">Get in Touch <FiArrowRight /></Link>
            <Link to="/services" className="cta-ghost-btn">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
