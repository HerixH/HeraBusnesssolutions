import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Trusted by 500+ Businesses</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-line-1">Transform Your</span>
              <span className="hero-line-2">
                <span className="hero-highlight">Business</span>
                <span className="hero-accent">Compliance</span>
              </span>
              <span className="hero-line-3">With Expert Solutions</span>
            </h1>
            
            <p className="hero-description">
              Streamline your tax compliance and business registration with our 
              comprehensive solutions. We handle the complexity so you can focus 
              on growing your business.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('services').scrollIntoView()}>
                <span>Explore Services</span>
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>
                <span>Get Started</span>
              </button>
            </div>
            
            <div className="hero-features">
              <div className="feature-item">
                <span>Fast Processing</span>
              </div>
              <div className="feature-item">
                <span>100% Compliant</span>
              </div>
              <div className="feature-item">
                <span>Premium Support</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="main-card">
                <div className="card-header">
                  <div className="card-avatar">HERA</div>
                  <div className="card-status">
                    <div className="status-dot"></div>
                    <span>Online</span>
                  </div>
                </div>
                <div className="card-content">
                                     <div className="service-grid">
                     <div className="service-item">
                       <div className="service-info">
                         <h4>Tax Filing</h4>
                         <p>Complete compliance</p>
                       </div>
                     </div>
                     <div className="service-item">
                       <div className="service-info">
                         <h4>Registration</h4>
                         <p>Business setup</p>
                       </div>
                     </div>
                     <div className="service-item">
                       <div className="service-info">
                         <h4>Consulting</h4>
                         <p>Expert guidance</p>
                       </div>
                     </div>
                     <div className="service-item">
                       <div className="service-info">
                         <h4>Compliance</h4>
                         <p>Regulatory support</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
              
                             <div className="floating-card card-1">
                 <div className="floating-content">
                   <div className="floating-icon">500+</div>
                   <span>Happy Clients</span>
                 </div>
               </div>
               
               <div className="floating-card card-2">
                 <div className="floating-content">
                   <div className="floating-icon">10+</div>
                   <span>Years Experience</span>
                 </div>
               </div>
               
               <div className="floating-card card-3">
                 <div className="floating-content">
                   <div className="floating-icon">100%</div>
                   <span>Success Rate</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;