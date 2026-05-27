import React, { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import './Header.css';

const navLinks = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img className="logo-image" src="/images/hera-logo.svg?v=11" alt="Hera Business Solutions logo" />
          <div className="logo-text">
            <span className="logo-name">HERA</span>
            <span className="logo-tagline">Business Solutions</span>
          </div>
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={href}
                  className={activeSection === id ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get Consultation
          </a>
        </nav>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
