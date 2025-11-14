import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh" 
            alt="Profile" 
            className="navbar-avatar"
          />
          <div className="navbar-info">
            <h3>HARSH MHATRE</h3>
            <p>IBM Certified Data Analyst | ML Enthusiast</p>
          </div>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('experience')}>Experience</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('education')}>Education</a>
          <a onClick={() => scrollToSection('certifications')}>Certifications</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
          <button className="hire-button" onClick={() => scrollToSection('contact')}>
            Hire Me →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
