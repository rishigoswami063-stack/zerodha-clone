import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Signup', href: '#signup', isHash: true },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu} className="navbar-logo-link" aria-label="Zerodha Home">
            <img src="/images/logo.svg" alt="Zerodha" className="navbar-logo" />
          </Link>
        </div>

        <div className="navbar-right">
          {/* Desktop Nav Links */}
          <ul className="navbar-nav desktop-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                {link.isHash ? (
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="nav-link">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger / Menu Icon Toggle */}
          <button
            type="button"
            className={`navbar-hamburger ${isMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Slide-down */}
      <div className={`navbar-drawer ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="drawer-nav container">
          {navLinks.map((link) => (
            <li key={link.label} className="drawer-item">
              {link.isHash ? (
                <a href={link.href} className="drawer-link" onClick={closeMenu}>
                  {link.label}
                </a>
              ) : (
                <Link to={link.href} className="drawer-link" onClick={closeMenu}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && <div className="drawer-backdrop" onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;
