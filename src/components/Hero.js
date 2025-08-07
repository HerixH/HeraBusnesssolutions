import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              YOUR
              <span className="hero-highlight"> FAVOURITE</span>
              <br />
              <span className="hero-subtitle">TAX COMPLIANCE</span>
              <br />
              <span className="hero-company">CONSULTANCY FIRM</span>
            </h1>
            
            <p className="hero-description">
              Professional tax compliance and business registration services 
              tailored to meet your business needs. We specialize in comprehensive 
              solutions for modern businesses.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('services').scrollIntoView()}>
                Our Services
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-content">
                <div className="business-icons">
                  <div className="icon-item">📊</div>
                  <div className="icon-item">📋</div>
                  <div className="icon-item">🏢</div>
                  <div className="icon-item">💼</div>
                </div>
                <h3>Professional Business Solutions</h3>
                <p>Streamlined processes for all your compliance needs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Clients Served</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Compliance Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;