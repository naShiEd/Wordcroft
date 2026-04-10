import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Terms() {
  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', padding: '160px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px', color: 'var(--navy)' }}>
        <ScrollReveal>
          <span className="section-tag">Terms of Service</span>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em' }}>Terms & Conditions</h1>
          <p style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '48px' }}>Last Updated: April 10, 2026</p>

          <div className="legal-content" style={{ lineHeight: 1.8, fontSize: '16px' }}>
            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>1. Acceptance of Terms</h2>
            <p>By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in the Republic of Zimbabwe.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Wordcroft's website for personal, non-commercial transitory viewing only.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>3. Logistics Services</h2>
            <p>Any logistics or transportation services provided by Wordcroft are governed by separate commercial agreements and are subject to the standard terms of trade applicable in the transport sector of Zimbabwe.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>4. Limitations</h2>
            <p>In no event shall Wordcroft or its partners be liable for any damages arising out of the use or inability to use the materials on Wordcroft's website.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>5. Governing Law</h2>
            <p>Any claim relating to Wordcroft's website shall be governed by the laws of the Republic of Zimbabwe without regard to its conflict of law provisions.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
