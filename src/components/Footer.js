import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img className="footer-logo-image" src={logo} alt="Hera Business Solutions" />
              <div className="logo-text">
                <h3>HERA</h3>
                <span>BUSINESS SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-description">
              Your favourite tax compliance consultancy firm. 
              We provide comprehensive business solutions for registration, 
              tax compliance, and corporate services.
            </p>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Business Registration</li>
              <li>Tax Compliance</li>
              <li>PACRA Services</li>
              <li>ZRA Registration</li>
              <li>VAT & PAYE</li>
              <li>Corporate Consulting</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+260 976 722 919</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@herabusiness.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Lusaka, Zambia</span>
            </div>
          </div>

          <div className="footer-cta">
            <h4>Ready to Get Started?</h4>
            <p>Contact us today for professional business solutions</p>
            <button 
              className="footer-cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Get Consultation
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} HERA Business Solutions. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;