import React from 'react';
import './Hero.css';

const stats = [
  { value: '500+', label: 'Clients served' },
  { value: '10+', label: 'Years experience' },
  { value: '100%', label: 'Compliance rate' },
];

const features = [
  'Fast processing',
  'Fully compliant',
  'Dedicated support',
];

const services = [
  { abbr: 'TF', title: 'Tax Filing', desc: 'Complete compliance' },
  { abbr: 'BR', title: 'Registration', desc: 'Business setup' },
  { abbr: 'CS', title: 'Consulting', desc: 'Expert guidance' },
  { abbr: 'CP', title: 'Compliance', desc: 'Regulatory support' },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Trusted by 500+ businesses in Zambia</span>

            <h1 className="hero-title">
              Expert tax compliance &amp;{' '}
              <span className="hero-accent">business registration</span>
            </h1>

            <p className="hero-description">
              HERA Business Solutions handles registration, taxation, and regulatory
              compliance so you can focus on growing your business with confidence.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                View our services
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Free consultation
              </button>
            </div>

            <ul className="hero-features">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-brand">
                  <img src="/images/hera-logo.svg?v=11" alt="" aria-hidden="true" />
                  <div>
                    <strong>HERA Business Solutions</strong>
                    <span>Compliance dashboard</span>
                  </div>
                </div>
              </div>

              <div className="hero-service-grid">
                {services.map((service) => (
                  <div key={service.abbr} className="hero-service-item">
                    <span className="hero-service-abbr">{service.abbr}</span>
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
