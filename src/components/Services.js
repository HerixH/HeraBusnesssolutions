import React from 'react';
import './Services.css';

const registrationServices = [
  'PACRA', 'ZRA', 'NAPSA', 'ZPPA', 'NCC',
  'NHIMA', 'Workers Compensation', 'Bank Account Opening', 'EIZ', 'ERB',
];

const taxComplianceServices = [
  'PAYE', 'VAT', 'TOT', 'Withholding Tax', 'Tourism Levy',
  'PTT', 'Tax Reconciliation',
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">Services we specialize in</h2>
          <p className="section-subtitle">
            From PACRA, ZRA and all regulatory agencies. Comprehensive business solutions
            tailored to your compliance and registration needs.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card reveal">
            <div className="service-card-header">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h3>Registration</h3>
                <p className="service-card-meta">{registrationServices.length} services</p>
              </div>
            </div>

            <ul className="service-list">
              {registrationServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>

          <article className="service-card reveal">
            <div className="service-card-header">
              <div className="service-card-icon service-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h3>Tax Compliance</h3>
                <p className="service-card-meta">{taxComplianceServices.length} services</p>
              </div>
            </div>

            <ul className="service-list">
              {taxComplianceServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="services-cta reveal">
          <h3>Ready to get started?</h3>
          <p>Let us handle your compliance while you focus on growth.</p>
          <button
            className="btn btn-white"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get free consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
