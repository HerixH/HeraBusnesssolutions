import React from 'react';
import './Services.css';

const Services = () => {
  const registrationServices = [
    'PACRA',
    'ZRA',
    'NAPSA',
    'ZPPA',
    'NCC',
    'NHIMA',
    'WORKER COMPENSATION',
    'BANK ACCOUNT OPENING',
    'EIZ',
    'ERB'
  ];

  const taxComplianceServices = [
    'PAYE',
    'VAT',
    'TOT',
    'WITHHOLDING TAX',
    'TOURISM LEVY',
    'PTT',
    'BID SUBMIT TENDERS'
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">WE ARE <span>SPECIALIZED IN:</span></h2>
          <p className="services-subtitle">
            Comprehensive business solutions tailored to meet your compliance and registration needs
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card registration-card">
            <div className="card-header">
              <div className="card-icon">
                <span>📋</span>
              </div>
              <h3>REGISTRATION</h3>
            </div>
            
            <div className="service-list">
              {registrationServices.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-bullet">→</span>
                  <span className="service-name">{service}</span>
                </div>
              ))}
            </div>
            
            <div className="card-footer">
              <p>Complete registration services for all your business needs</p>
            </div>
          </div>

          <div className="service-card tax-card">
            <div className="card-header">
              <div className="card-icon">
                <span>💼</span>
              </div>
              <h3>TAX COMPLIANCY</h3>
            </div>
            
            <div className="service-list">
              {taxComplianceServices.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-bullet">→</span>
                  <span className="service-name">{service}</span>
                </div>
              ))}
            </div>
            
            <div className="card-footer">
              <p>Ensuring 100% tax compliance for your business operations</p>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Get Started?</h3>
            <p>Let us handle your business compliance while you focus on growth</p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;