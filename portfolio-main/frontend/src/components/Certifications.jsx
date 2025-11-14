import React from 'react';
import { Award, CheckCircle, Clock, BookOpen, Target, TrendingUp } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const completedCerts = [
    {
      title: 'Data Science and AIML Internship Certificate',
      issuer: 'YBI Foundation',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Python Programming Internship Certificate',
      issuer: 'YBI Foundation',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Software Engineering & Agile Developement',
      issuer: 'Infosys Springboard',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Software Engineering Virtual Experience',
      issuer: 'Goldman Sachs (Forage)',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Software Engineering Simulation',
      issuer: 'JPMorgan Chase (Forage)',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Advanced Engineering Simulation',
      issuer: 'Accenture (Forage)',
      year: '2024',
      status: 'Completed'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Data Visualization & Dashboard Essentials',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Data Visualization with Python',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Python for Data Science and AI',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Python Project for Data Science',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Databases and SQL for Data Science',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Excel Essentials for Data Analytics',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    },
    {
      title: 'Generative AI Essentials for Data Analytics',
      issuer: 'IBM',
      year: '2025',
      status: 'Completed'
    }
  ];

  const pursuingCerts = [
    {
      title: 'IBM Data Analyst Professional Certificate',
      issuer: 'IBM',
      expected: '2025',
      status: 'Working On Capstone Project'
    },
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      expected: '2025',
      status: 'In Progress'
    }
  ];

  const learningValues = [
    {
      icon: <BookOpen size={28} />,
      title: 'Self-Learning',
      color: '#60a5fa'
    },
    {
      icon: <Target size={28} />,
      title: 'Goal-Oriented',
      color: '#a78bfa'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Growth Mindset',
      color: '#ec4899'
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-header">
        <h2 className="section-title">Certifications & Training</h2>
        <p className="section-subtitle">
          Continuous learning through industry-recognized certifications and specialized training programs
        </p>
      </div>

      <div className="certifications-stats">
        <div className="cert-stat-card">
          <div className="cert-stat-value">10+</div>
          <div className="cert-stat-label">Total Certifications</div>
        </div>
        <div className="cert-stat-card">
          <div className="cert-stat-value">10</div>
          <div className="cert-stat-label">Completed</div>
        </div>
        <div className="cert-stat-card">
          <div className="cert-stat-value">2</div>
          <div className="cert-stat-label">In Progress</div>
        </div>
        <div className="cert-stat-card">
          <div className="cert-stat-value">2025</div>
          <div className="cert-stat-label">Active Year</div>
        </div>
      </div>

      <div className="certifications-container">
        <div className="cert-category">
          <h3 className="cert-category-title">Completed Certifications</h3>
          <div className="certs-grid">
            {completedCerts.map((cert, index) => (
              <div key={index} className="cert-card completed">
                <div className="cert-status-badge completed">
                  <CheckCircle size={16} />
                  <span>{cert.status}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cert-category">
          <h3 className="cert-category-title">Currently Pursuing</h3>
          <div className="certs-grid pursuing">
            {pursuingCerts.map((cert, index) => (
              <div key={index} className="cert-card pursuing">
                <div className="cert-status-badge pursuing">
                  <Clock size={16} />
                  <span>{cert.status}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">Expected: {cert.expected}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="learning-commitment">
        <h3 className="commitment-title">Commitment to Continuous Learning</h3>
        <p className="commitment-text">
          Actively pursuing industry-relevant certifications to stay updated with the latest technologies 
          and best practices in data science and machine learning.
        </p>
        <div className="learning-values">
          {learningValues.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-icon" style={{ color: value.color }}>
                {value.icon}
              </div>
              <div className="value-title">{value.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
