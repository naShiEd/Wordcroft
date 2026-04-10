import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Privacy() {
  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', padding: '160px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px', color: 'var(--navy)' }}>
        <ScrollReveal>
          <span className="section-tag">Legal Compliance</span>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
          <p style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '48px' }}>Last Updated: April 10, 2026</p>

          <div className="legal-content" style={{ lineHeight: 1.8, fontSize: '16px' }}>
            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>1. Introduction</h2>
            <p>Wordcroft ("we", "us", or "our") is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This policy is aligned with the <strong>Data Protection Act [Chapter 11:12]</strong> of Zimbabwe.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>2. Data Collection</h2>
            <p>We collect personal information that you provide to us directly through our contact forms, careers portal, or direct communication. This may include:</p>
            <ul>
              <li>Name and contact information (Email, Phone Number)</li>
              <li>Company details and professional role</li>
              <li>IP addresses and browser information for site analytics</li>
            </ul>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>3. Purpose of Processing</h2>
            <p>Your data is processed only for lawful purposes, such as:</p>
            <ul>
              <li>Responding to business inquiries and providing logistics services.</li>
              <li>Maintaining regional partnership communications.</li>
              <li>Ensuring the security and functionality of our digital platforms.</li>
            </ul>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>4. Data Security</h2>
            <p>In compliance with Zimbabwean law, we implement robust technical and organizational measures to prevent unauthorized access, accidental loss, or destruction of personal data.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>5. Your Rights</h2>
            <p>Under the Data Protection Act, you have the right to request access to, correction of, or deletion of your personal information held by us. For any queries, please contact info@wordcroft.co.zw.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
