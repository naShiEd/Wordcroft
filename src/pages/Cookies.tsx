import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Cookies() {
  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', padding: '160px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px', color: 'var(--navy)' }}>
        <ScrollReveal>
          <span className="section-tag">Transparency</span>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em' }}>Cookies Policy</h1>
          <p style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '48px' }}>Last Updated: April 10, 2026</p>

          <div className="legal-content" style={{ lineHeight: 1.8, fontSize: '16px' }}>
            <p>Wordcroft uses cookies to improve your experience on our website. This policy explains what cookies are and how we use them.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>1. What are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website recognize your device and store information about your preferences or past actions.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our site and improve our services.</li>
            </ul>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>3. Managing Cookies</h2>
            <p>You can choose to disable cookies through your browser settings. However, please note that some parts of the site may not function correctly if cookies are disabled.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
