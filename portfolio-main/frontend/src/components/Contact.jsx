import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'harshmhatre3255@gmail.com',
      link: 'mailto:harshmhatre3255@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9028833255',
      link: 'tel:+919028833255'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      link: null
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/harsh-mhatre-019341243'
    }
  ];

  const interests = [
    'Data Storytelling',
    'Predictive Analytics',
    'Business Intelligence',
    'Machine Learning Research'
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <h2 className="section-title">Let's Connect!</h2>
        <p className="section-subtitle">
          I'm actively seeking entry-level opportunities in data analysis and machine learning. 
          Let's discuss how I can contribute to your team's success.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="status-card">
            <h3 className="status-title">Current Status</h3>
            <div className="status-badge available">
              <div className="pulse-dot"></div>
              <span>Available for Opportunities</span>
            </div>
            <p className="status-text">Immediate, open to relocation</p>
          </div>

          <div className="contact-info-section">
            <h3 className="info-section-title">Contact Information</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <div className="info-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="interests-section">
            <h4 className="interests-title">Areas of Interest</h4>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-badge">
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="cta-card">
            <h3 className="cta-title">Get In Touch</h3>
            <p className="cta-description">
              Feel free to reach out for opportunities, collaborations, or just a friendly chat 
              about data science and machine learning!
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:harshmhatre3255@gmail.com" 
                className="cta-button primary"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/harsh-mhatre-019341243" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
              <a 
                href="tel:+919028833255" 
                className="cta-button secondary"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          <div className="social-proof">
            <div className="proof-item">
              <div className="proof-icon">
                <Send size={24} />
              </div>
              <div className="proof-text">
                <div className="proof-title">Quick Response</div>
                <div className="proof-desc">Usually responds within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Harsh Mhatre. All rights reserved.</p>
        <p className="footer-tagline">Built with passion for data and technology</p>
      </footer>
    </section>
  );
};

export default Contact;
