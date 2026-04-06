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
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>{global.footer.text}</p>
        <Link to="/contact" className="footer-privacy">Work with us</Link>
      </div>
    </footer>
  );
}
