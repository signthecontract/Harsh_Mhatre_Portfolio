import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      number: '1',
      title: 'Data Science Intern',
      company: 'YBI Foundation',
      period: 'August 2024 - September 2024',
      type: 'Internship',
      location: 'Remote',
      responsibilities: [
        'Completed structured training in data science and machine learning fundamentals through hands-on projects',
        'Built and evaluated classification models (Logistic Regression, Decision Trees) for customer segmentation tasks',
        'Performed exploratory data analysis (EDA) on sample datasets to identify patterns and insights',
        'Applied data preprocessing techniques including handling missing values, scaling, and encoding categorical variables',
        'Created data visualizations using Matplotlib to communicate findings from analysis'
      ]
    },
    {
      number: '2',
      title: 'Python Programming Intern',
      company: 'YBI Foundation',
      period: 'June 2024 - July 2024',
      type: 'Internship',
      location: 'Remote',
      responsibilities: [
        'Developed Python scripts for data manipulation and automation using Pandas and NumPy',
        'Created web scraping scripts using BeautifulSoup and Selenium to collect data from websites',
        'Wrote functions for data cleaning and transformation to prepare datasets for analysis',
        'Gained experience in debugging code and optimizing script performance',
        'Documented code and created reusable modules for common data processing tasks'
      ]
    },
    {
      number: '3',
      title: 'Virtual Experience Programs',
      company: 'Multiple Companies',
      period: 'January 2024 - Present',
      type: 'Virtual Programs',
      location: 'Remote',
      responsibilities: [
        'Completed software engineering simulations with Goldman Sachs, JPMorgan Chase, and Accenture through Forage platform',
        'Worked on data analysis tasks, debugging exercises, and system design problems',
        'Gained exposure to industry best practices and agile development methodologies'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Hands-on experience gained through internships and virtual programs with leading organizations
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-number">{exp.number}</div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-badges">
                  <span className="experience-badge type-badge">{exp.type}</span>
                  <span className="experience-badge location-badge">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>
              <div className="experience-period">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <span className="bullet">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
