import { Link } from 'react-router-dom';
import { useCMS } from '../CMSContext';
import './Footer.css';

export default function Footer() {
  const { content } = useCMS();
  const { global } = content;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={global.logo} alt={global.companyName} style={{ height: '50px', width: 'auto', marginBottom: '16px' }} />
          </Link>
          <p className="footer-tagline">
            {global.footer.tagline}
          </p>
          <div style={{ marginTop: '24px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6' }}>
            {global.contact.address.split(',').map((line, i) => (
              <span key={i}>{line.trim()}<br /></span>
            ))}
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4 className="footer-heading">About Us</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/mission-values">Mission & Values</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/sustainability-policy" style={{ color: 'var(--teal)', fontWeight: 600 }}>Eco-Responsibility</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Legal & Compliance</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/cookies">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="footer-compliance-branding" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center', justifyContent: 'center', opacity: 0.8 }}>
           {global.compliance?.map((c: any) => (
             <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={c.logo} alt={c.name} style={{ height: '32px', width: 'auto', filter: 'grayscale(1) brightness(1.5)' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray)' }}>{c.name}</span>
             </div>
           ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p>{global.footer.text}</p>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>
            Developed by <a href="https://nashieddigital.co.zw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>Nashied Digital Boutique</a>
          </div>
        </div>
        <Link to="/contact" className="footer-privacy">Work with us</Link>
      </div>
    </footer>
  );
}
