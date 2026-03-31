import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/logo.png" alt="Wordcroft Investments" style={{ height: '50px', width: 'auto', marginBottom: '16px' }} />
          </Link>
          <p className="footer-tagline">
            Reliability at scale.
          </p>
          <div style={{ marginTop: '24px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6' }}>
            No. 7785 Longbridge Road<br />
            Nyakamete, Mutare<br />
            Zimbabwe
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4 className="footer-heading">About Us</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/profile">Company Profile</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><Link to="/csr">CSR Initiatives</Link></li>
              <li><Link to="/media">Media Kit</Link></li>
              <li><Link to="/policies/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Wordcroft Investments. All rights reserved.</p>
        <Link to="/policies/privacy-policy" className="footer-privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
