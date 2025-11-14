import React from 'react';
import { MapPin, CheckCircle, Rocket } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <CheckCircle size={16} />
            <span>Open to Entry-Level Data Analyst Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Harsh Mhatre</span>
          </h1>

          <h2 className="hero-subtitle">
            IBM Certified Data Analyst | Machine Learning Enthusiast
          </h2>

          <h3 className="hero-tagline">
            Building Data-Driven Solutions & Predictive Models
          </h3>

          <p className="hero-description">
            IT graduate with hands-on experience in data analysis, machine learning, and Python programming. 
            Completed multiple internships focused on data science and AI/ML, with practical experience in building 
            predictive models and automating data workflows. Seeking opportunities to apply analytical skills and 
            contribute to data-driven decision making.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value gradient-text">9.30/10.0</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-card">
              <div className="stat-value gradient-text">2</div>
              <div className="stat-label">Live Projects</div>
            </div>
          </div>

          <div className="achievement-card">
            <Rocket className="achievement-icon" />
            <div>
              <div className="achievement-title">Recent Achievement</div>
              <div className="achievement-text">Deployed AI-powered stock analysis & Excel automation platforms and becomes IBM Certified DATA ANALYST</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-button" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Get in Touch →
            </button>
            <button className="secondary-button" onClick={() => document.getElementById('experience').scrollIntoView({behavior: 'smooth'})}>
              View Experience →
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" 
              alt="Coding animation" 
              className="coding-gif"
            />
          </div>

          <div className="location-card">
            <h4>LOCATION & AVAILABILITY</h4>
            <div className="location-info">
              <MapPin size={18} className="location-icon" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="availability-info">
              <CheckCircle size={18} className="check-icon" />
              <span>Immediate, open to relocation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
