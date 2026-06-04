import React, { useState } from 'react';
import { FiMail, FiPhone, FiSend, FiCheckCircle, FiAlertCircle, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi';
import { SiTiktok, SiWhatsapp } from 'react-icons/si';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import axios from 'axios';
import './Contact.css';

const SERVICES = ['Media Coverage', 'Website Design', 'Live Streaming', 'Graphic Design', 'Event Planning', 'Travel & Tour'];
const BUDGETS = ['Less than GH₵2,000', 'GH₵2,000 – 5,000', 'GH₵5,000 – 10,000', 'GH₵10,000+', 'Prefer not to say'];
const INITIAL = { name: '', email: '', phone: '', service: '', budget: '', message: '' };

const SOCIALS = [
  { icon: <FiInstagram size={18} />, label: 'Instagram', handle: '@SpicaSuiteConsult', href: 'https://instagram.com' },
  { icon: <FiFacebook size={18} />, label: 'Facebook', handle: 'Spica Suite Consult', href: 'https://facebook.com' },
  { icon: <SiTiktok size={16} />, label: 'TikTok', handle: '@SpicaSuiteConsult', href: 'https://tiktok.com' },
  { icon: <SiWhatsapp size={18} />, label: 'WhatsApp', handle: '+233 553 386 282', href: 'https://wa.me/233553386282' },
];

const FAQ = [
  { q: 'How quickly do you respond to enquiries?', a: 'We respond to all enquiries within 24 hours on business days. For urgent requests, call us directly.' },
  { q: 'Do you travel outside Ghana for events?', a: 'Yes! We serve clients across West Africa and can travel internationally for weddings and large-scale events.' },
  { q: 'Can I bundle multiple services?', a: "Absolutely — and you'll receive a package discount. Many clients combine event planning, media coverage, and live streaming." },
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 4–6 weeks ahead for most services, and 3–6 months for weddings and large events.' },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const onChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = 'Valid email required';
    if (!form.service) errs.service = 'Please select a service';
    if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const onSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm(INITIAL);
    } catch { setStatus('error'); }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80)' }} />
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__content">
          <span className="contact-pill-tag">Get In Touch</span>
          <h1>Let's Create Something<br />Extraordinary Together</h1>
          <p>Tell us about your project and we'll get back to you within 24 hours.</p>
          <div className="hero-contact-pills">
            <a href="tel:+233553386282" className="hero-contact-pill"><FiPhone size={14} /> +233 (0) 553386282</a>
            <a href="mailto:spicasuiteconsult@gmail.com" className="hero-contact-pill"><FiMail size={14} /> spicasuiteconsult@gmail.com</a>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <section className="contact-main">
        <div className="container contact-layout">

          {/* LEFT — info + socials */}
          <div className="contact-sidebar">
            {/* Contact info card */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <div className="cinfo-item">
                <div className="cinfo-icon"><FiMail /></div>
                <div>
                  <span className="cinfo-label">Email</span>
                  <a href="mailto:spicasuiteconsult@gmail.com">spicasuiteconsult@gmail.com</a>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon"><FiPhone /></div>
                <div>
                  <span className="cinfo-label">Phone</span>
                  <a href="tel:+233553386282">+233 (0) 553 386 282</a>
                  <a href="tel:+233542172880">+233 (0) 542 172 880</a>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon"><FiMapPin /></div>
                <div>
                  <span className="cinfo-label">Location</span>
                  <span>Kumasi, Ghana</span>
                  <span>Serving clients nationwide & internationally</span>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon"><FiClock /></div>
                <div>
                  <span className="cinfo-label">Working Hours</span>
                  <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
                  <span>Sat: 9:00 AM – 3:00 PM</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials-card">
              <h4><FiMessageCircle /> Follow Us</h4>
              <div className="socials-list">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} className="social-row" target="_blank" rel="noreferrer">
                    <div className="social-row__icon">{s.icon}</div>
                    <div>
                      <span className="social-row__label">{s.label}</span>
                      <span className="social-row__handle">{s.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/233553386282" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <SiWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT — form */}
          <div className="contact-form-panel">
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success__icon"><FiCheckCircle size={52} /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-reset" onClick={() => setStatus(null)}>Send Another Message</button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>Fill in the details below and we'll be in touch shortly.</p>
                </div>
                <form className="contact-form" onSubmit={onSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Full Name <span className="req">*</span></label>
                      <input id="name" name="name" value={form.name} onChange={onChange} placeholder="e.g. Abena Mensah" />
                      {errors.name && <span className="form-error"><FiAlertCircle size={13} />{errors.name}</span>}
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email Address <span className="req">*</span></label>
                      <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
                      {errors.email && <span className="form-error"><FiAlertCircle size={13} />{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+233 ..." />
                    </div>
                    <div className="form-field">
                      <label htmlFor="service">Service Interested In <span className="req">*</span></label>
                      <select id="service" name="service" value={form.service} onChange={onChange}>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <span className="form-error"><FiAlertCircle size={13} />{errors.service}</span>}
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="budget">Approximate Budget</label>
                    <div className="budget-pills">
                      {BUDGETS.map(b => (
                        <button type="button" key={b} className={`budget-pill ${form.budget === b ? 'budget-pill--active' : ''}`} onClick={() => setForm(f => ({ ...f, budget: b }))}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Your Message <span className="req">*</span></label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your project, event, or idea..." />
                    {errors.message && <span className="form-error"><FiAlertCircle size={13} />{errors.message}</span>}
                  </div>
                  {status === 'error' && <div className="form-alert">Something went wrong. Please try again or contact us directly.</div>}
                  <button type="submit" className="form-submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? <><span className="spinner" /> Sending...</> : <><FiSend /> Send Message</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <div className="map-section">
        <iframe
          title="Spica Suite Consult Location"
          src="https://maps.google.com/maps?q=Kumasi,%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'saturate(0.8)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="faq-pill-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
