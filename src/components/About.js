import React from 'react';
import './About.css';

const stats = [
  { value: '500+', label: 'Businesses served' },
  { value: '10+', label: 'Years experience' },
  { value: '100%', label: 'Compliance rate' },
  { value: '24hr', label: 'Response time' },
];

const values = [
  {
    title: 'Expert guidance',
    description: 'Deep knowledge of Zambian tax law and regulatory frameworks.',
  },
  {
    title: 'Trusted partner',
    description: 'Long-term relationships built on reliability and transparency.',
  },
  {
    title: 'End-to-end service',
    description: 'From PACRA registration to ZRA filings with one dedicated team.',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-badge">About us</span>
          <h2 className="section-title">Your trusted partner in <span>compliance</span></h2>
          <p className="section-subtitle">
            HERA Business Solutions helps businesses across Zambia navigate registration,
            taxation, and regulatory requirements with confidence.
          </p>
        </div>

        <div className="about-stats reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <div className="about-story reveal">
            <h3>Who we are</h3>
            <p>
              Based at Lotti House on Cairo Road in Lusaka, HERA Business Solutions
              is the go-to consultancy for businesses seeking reliable compliance services.
            </p>
            <p>
              Our team understands the complexities of Zambian business regulations,
              from PACRA and ZRA registrations to ongoing tax filings.
            </p>
            <ul className="about-highlights">
              <li>Licensed &amp; certified professionals</li>
              <li>Transparent pricing, no hidden fees</li>
              <li>Dedicated account manager per client</li>
            </ul>
          </div>

          <div className="about-values">
            {values.map((value) => (
              <div key={value.title} className="about-value reveal">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
