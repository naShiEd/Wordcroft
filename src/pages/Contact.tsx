import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const { content } = useCMS();
  const office = content.global.contact;
  const social = content.global.social;

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ 
          backgroundImage: 'linear-gradient(rgba(0,15,10,0.65), rgba(0,15,10,0.65)), url("/assets/a/services.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
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
                <div className="office-city" style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>{office.city} HQ</div>
                <div className="office-address" style={{ color: 'var(--white)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {office.address}<br />
                  {office.postal}
                </div>
                <div className="office-contact-item">
                  <strong style={{ color: 'var(--gray)' }}>E:</strong> <a href={`mailto:${office.email}`} style={{ color: 'var(--white)', textDecoration: 'none' }}>{office.email}</a>
                </div>
              </div>

              <div className="social-links" style={{ marginTop: '40px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                {social.facebook && social.facebook !== '#' && (
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                    <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                  </a>
                )}
                {social.linkedin && social.linkedin !== '#' && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                    <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                  </a>
                )}
                {social.twitter && social.twitter !== '#' && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="custom-social-link" style={{ color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                    <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              {isSubmitted ? (
                <div className="glass-effect" style={{ padding: '60px 48px', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--teal)' }}>
                   <div style={{ width: '80px', height: '80px', background: 'rgba(0,194,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '16px' }}>Message Received</h2>
                   <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
                     Thank you for reaching out. A Wordcroft regional representative will review your inquiry and contact you shortly.
                   </p>
                   <button onClick={() => setIsSubmitted(false)} className="btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--white)' }}>Send another message</button>
                </div>
              ) : (
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
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
