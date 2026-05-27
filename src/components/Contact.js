import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactDetails = [
  {
    title: 'Phone',
    lines: ['+260 976 722 919'],
    note: 'Mon–Fri, 8AM – 5PM',
    href: 'tel:+260976722919',
  },
  {
    title: 'Email',
    lines: ['info@herabusiness.com'],
    note: 'Response within 24 hours',
    href: 'mailto:info@herabusiness.com',
  },
  {
    title: 'Office',
    lines: ['2nd Floor Lotti House, Cairo Road', 'Lusaka, Zambia'],
    note: 'Mon–Fri, 8AM – 5PM',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message || 'No message provided',
      to_email: 'info@herabusiness.com',
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or email info@herabusiness.com directly.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-badge">Get in touch</span>
          <h2 className="section-title">Contact us</h2>
          <p className="section-subtitle">
            Ready to streamline your business compliance? Reach out to our team today.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactDetails.map((item) => (
              <div key={item.title} className="info-card reveal">
                <h3>{item.title}</h3>
                {item.lines.map((line) => (
                  item.href ? (
                    <a key={line} href={item.href} className="info-link">{line}</a>
                  ) : (
                    <p key={line}>{line}</p>
                  )
                ))}
                <span className="info-note">{item.note}</span>
              </div>
            ))}
          </div>

          <div className="contact-form-wrap reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Request a free consultation</h3>

              <div className="form-group">
                <label htmlFor="name">Full name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+260 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service needed</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="registration">Business Registration</option>
                  <option value="tax-compliance">Tax Compliance</option>
                  <option value="pacra">PACRA Registration</option>
                  <option value="zra">ZRA Registration</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your business needs..."
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              {error && <div className="form-alert form-alert--error">{error}</div>}
              {isSubmitted && (
                <div className="form-alert form-alert--success">
                  Thank you! Your message has been sent. We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
