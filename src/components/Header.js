import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img className="logo-image" src="/images/hera-logo.jpeg" alt="Hera Business Solutions logo" />
          <div className="logo-text">
            <h1>HERA</h1>
            <span>BUSINESS SOLUTIONS</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} onClick={() => setIsMenuOpen(false)}>
          <ul className="nav-list">
            <li><a href="#home" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}>Services</a></li>
            <li><a href="#about" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}>About</a></li>
            <li><a href="#contact" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}>Contact</a></li>
          </ul>
        </nav>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
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