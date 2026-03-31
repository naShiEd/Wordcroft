import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  {
    label: 'About us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Mission & Values', href: '/mission-values' },
    ],
  },
  {
    label: 'Partnerships',
    href: '/partnerships',
    children: [],
  },
  {
    label: 'Sustainability',
    href: '/sustainability',
    children: [
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Corporate Social Responsibility', href: '/csr' },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Wordcroft Investments" style={{ height: '40px', width: 'auto' }} />
        </Link>

        <nav className="navbar-links" role="navigation">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className={`nav-item${item.children.length > 0 ? ' has-dropdown' : ''}`}
              onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.href}
                className={`nav-link${location.pathname.startsWith(item.href) ? ' active' : ''}`}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="nav-chevron">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>

      {/* Dropdown Desktop */}
      {item.children.length > 0 && openMenu === item.label && (
        <div className="nav-dropdown glass-effect">
          {item.children.map((child) => (
            <Link key={child.label} to={child.href} className="dropdown-link">
              <span className="dropdown-label">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
            </div>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary nav-cta">
            Contact Us
          </Link>
          <button
            className={`mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((item) => (
          <div key={item.label} className="mobile-nav-group">
            <Link to={item.href} className="mobile-nav-link">{item.label}</Link>
            {item.children.map((child) => (
              <Link key={child.href} to={child.href} className="mobile-nav-child">{child.label}</Link>
            ))}
          </div>
        ))}
        <Link to="/contact" className="btn-primary mobile-cta">Contact Us</Link>
      </div>
    </header>
  );
}
