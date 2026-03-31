import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Wordcroft Investments. We will get back to you soon.');
  };

  const office = {
    city: 'Mutare',
    address: 'No. 7785 Longbridge Road, Nyakamete',
    postal: 'P.O Box 559 Mutare, Zimbabwe',
    phone: '+263 (0) ...',
    email: 'info@wordcroft.co.zw'
  };

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url("/assets/a/services.png")' }} />
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 200px' }}>
              <span className="section-tag page-hero-tag" style={{ margin: 0 }}>Contact Us</span>
            </div>
            <div style={{ flex: '3 1 600px' }}>
              <h1 className="page-hero-title" style={{ fontSize: 'clamp(48px, 6vw, 92px)', fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--white)' }}>
                We'd like to hear from you.
              </h1>
              <p className="page-hero-desc" style={{ marginTop: '32px', maxWidth: '600px', fontSize: '20px', lineHeight: 1.6 }}>
                Let us partner together to build a reliable, efficient, and transparent logistics backbone for Southern Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <ScrollReveal>
            <div className="contact-info">
              <h2 className="contact-subtitle" style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>Get in touch</h2>
              <p className="contact-text" style={{ color: 'var(--gray)', marginBottom: '40px' }}>
                For logistics inquiries, partnerships, or fleet information, please reach out to our team.
              </p>

              <div className="office-card" style={{ background: 'var(--navy-mid)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="office-city" style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>{office.city}</div>
                <div className="office-address" style={{ color: 'var(--white)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {office.address}<br />
                  {office.postal}
                </div>
                <div className="office-contact-item">
                  <strong style={{ color: 'var(--gray)' }}>E:</strong> <a href={`mailto:${office.email}`} style={{ color: 'var(--white)', textDecoration: 'none' }}>{office.email}</a>
                </div>
              </div>

              <div className="social-links" style={{ marginTop: '40px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                <a href="https://www.facebook.com/wordcroft" target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                  <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </a>
                <a href="https://www.instagram.com/wordcroft" target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                  <svg style={{ width: '22px', height: '22px', fill: 'currentColor' }} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@wordcroft_investments" target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                  <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
                </a>
                <style>
                  {`
                    .custom-social-link:hover {
                      background: var(--teal) !important;
                      color: var(--navy) !important;
                      transform: translateY(-4px);
                    }
                  `}
                </style>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
            <form className="contact-form glass-effect" onSubmit={handleSubmit} style={{ padding: '48px', borderRadius: '24px' }}>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="name" style={{ display: 'block', color: 'var(--white)', marginBottom: '8px', fontSize: '14px' }}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--white)' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="email" style={{ display: 'block', color: 'var(--white)', marginBottom: '8px', fontSize: '14px' }}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--white)' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="subject" style={{ display: 'block', color: 'var(--white)', marginBottom: '8px', fontSize: '14px' }}>Subject</label>
                <select
                  id="subject"
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--white)' }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option>General Inquiry</option>
                  <option>Logistics & Transport</option>
                  <option>Fuel & Dry Goods</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '32px' }}>
                <label htmlFor="message" style={{ display: 'block', color: 'var(--white)', marginBottom: '8px', fontSize: '14px' }}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--white)', resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', borderRadius: '8px', fontWeight: 700 }}>Send Message →</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);
}
