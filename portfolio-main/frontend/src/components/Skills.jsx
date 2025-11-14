import React from 'react';
import { Code, Database, BarChart3, Layers, Wrench, TrendingUp } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming & Analytics',
      skills: [
        'Python (Pandas, NumPy, Scikit-learn)',
        'C,C++,HTML,CSS,JAVASCRIPT',
        'SQL',
        'R (basic)',
        'Excel (VLOOKUP, Pivot Tables)'
      ]
    },
    {
      icon: <Layers size={24} />,
      title: 'Machine Learning',
      skills: [
        'Supervised Learning (Regression, Classification)',
        'Clustering',
        'Feature Engineering',
        'Model Evaluation',
        'Prompt Optimization'
      ]
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Visualization',
      skills: [
        'Matplotlib',
        'Seaborn',
        'Folium',
        'Power BI ',
        'Tableau ',
        'Excel Charts & Dashboards'
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB (basic)',
        'SQLite'
      ]
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Platforms',
      skills: [
        'Jupyter Notebook',
        'Git',
        'Github',
        'VS Code',
        'Google Colab',
        'AWS (basic)'
      ]
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Statistical Analysis',
      skills: [
        'Hypothesis Testing',
        'A/B Testing (basic)',
        'Descriptive Statistics',
        'Correlation Analysis'
      ]
    }
  ];

  const learningSkills = [
    'IBM Data Analyst Professional',
    'IBM Data Science Professional',
    'Agentic & Generative AI',
    'NLP',
    'Computer Vision',
    'Advanced ML Concepts'
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Comprehensive technical skill set acquired through academic learning, internships, and hands-on project experience
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>
                  <span className="bullet">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="learning-section">
        <h3 className="learning-title">Currently Learning</h3>
        <div className="learning-badges">
          {learningSkills.map((skill, index) => (
            <div key={index} className="learning-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
