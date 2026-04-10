import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function SustainabilityPolicy() {
  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', padding: '160px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px', color: 'var(--navy)' }}>
        <ScrollReveal>
          <span className="section-tag">Environmental Responsibility</span>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em' }}>Sustainability & Green Logistics</h1>
          <p style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '48px' }}>Standard Operating Procedure: Eco-Responsibility</p>

          <div className="legal-content" style={{ lineHeight: 1.8, fontSize: '16px' }}>
            <p>At Wordcroft, sustainability is integrated into our operational DNA. We align our environmental strategies with the <strong>Environmental Management Act [Chapter 20:27]</strong> of Zimbabwe.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>1. EMA Compliance</h2>
            <p>We work closely with the Environmental Management Agency (EMA) to ensure all our transport operations, especially those involving hazardous materials like fuel, meet the highest environmental safety standards.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>2. Fleet Efficiency</h2>
            <p>Our "Green Logistics" initiative focuses on:</p>
            <ul>
              <li>Regular engine maintenance to minimize carbon emissions.</li>
              <li>Route optimization to reduce fuel consumption and wear.</li>
              <li>Strict spill prevention protocols during fuel transit.</li>
            </ul>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>3. Waste Management</h2>
            <p>We implement a zero-tolerance policy for improper waste disposal. All workshop and operational waste is handled by certified waste management partners in accordance with municipal and national regulations.</p>

            <h2 style={{ fontSize: '24px', margin: '40px 0 20px', color: 'var(--navy)' }}>4. Community Impact</h2>
            <p>Sustainability extends to the human environment. We prioritize safety for all road users and invest in local community awareness programs regarding road safety and environmental care.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
