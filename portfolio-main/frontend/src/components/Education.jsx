import React from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
  const highlights = [
    {
      icon: <Award size={24} />,
      title: 'Academic Excellence',
      description: 'Consistently maintained high CGPA of 9.30/10.0 throughout degree program'
    },
    {
      icon: <Users size={24} />,
      title: 'Multiple Internships',
      description: 'Completed specialized internships in Data Science and Python Programming'
    },
    {
      icon: <Award size={24} />,
      title: 'Industry Exposure',
      description: 'Gained practical experience through virtual programs with top companies'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Self-Learning',
      description: 'Actively learning advanced ML concepts through online courses and practice'
    }
  ];

  const coursework = [
    'IBM Data Analyst Professional Certificate',
    'Database Management Systems',
    'Data Structures',
    'Statistics',
    'Computer Networks',
    'Software Engineering',
    'Web Development'
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Marathi', level: 'Native' }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Strong academic foundation with outstanding performance and relevant coursework
        </p>
      </div>

      <div className="education-container">
        <div className="degree-card">
          <div className="degree-header">
            <div className="degree-icon">
              <GraduationCap size={40} />
            </div>
            <div className="degree-info">
              <h3 className="degree-title">Bachelor of Science in Information Technology</h3>
              <p className="degree-university">Mumbai University</p>
              <p className="degree-period">2023 - 2025</p>
            </div>
          </div>

          <div className="degree-stats">
            <div className="stat-item">
              <div className="stat-value gradient-text">9.30/10.0</div>
              <div className="stat-label">Current CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">2025</div>
              <div className="stat-label">Expected Graduation</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">3</div>
              <div className="stat-label">Years Program</div>
            </div>
          </div>

          <div className="coursework-section">
            <h4 className="subsection-title">Relevant Coursework</h4>
            <div className="coursework-grid">
              {coursework.map((course, index) => (
                <div key={index} className="coursework-item">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h4 className="highlight-title">{highlight.title}</h4>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h4 className="subsection-title">Languages</h4>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <div className="language-name">{lang.name}</div>
                <div className="language-level">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
