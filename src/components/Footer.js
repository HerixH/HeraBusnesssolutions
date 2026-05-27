import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src="/images/hera-logo.svg?v=11" alt="HERA Business Solutions" />
              <div>
                <strong>HERA</strong>
                <span>Business Solutions</span>
              </div>
            </a>
            <p>
              Professional tax compliance and business registration consultancy
              serving businesses across Zambia.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Business Registration</a></li>
              <li><a href="#services">Tax Compliance</a></li>
              <li><a href="#services">PACRA &amp; ZRA</a></li>
              <li><a href="#services">Corporate Consulting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+260976722919">+260 976 722 919</a></li>
              <li><a href="mailto:info@herabusiness.com">info@herabusiness.com</a></li>
              <li>Lotti House, Cairo Road, Lusaka</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} HERA Business Solutions. All rights reserved.</p>
          <div className="footer-links">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
