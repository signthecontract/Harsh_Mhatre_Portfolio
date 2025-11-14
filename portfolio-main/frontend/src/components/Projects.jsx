import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Prognosis - AI Stock Market Analysis Platform',
      description: 'Intelligent stock portfolio management platform with advanced analytics, predictive modeling, and personalized investment insights. Features AI-driven market analysis, real-time data processing, and comprehensive portfolio tracking.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format&q=80',
      tags: ['React', 'Next.js', 'AI/ML', 'Financial APIs', 'Vercel'],
      status: 'Live',
      category: 'AI/ML & Finance',
      featured: true,
      achievements: [
        'Developed AI-powered predictive models for stock market analysis',
        'Integrated real-time financial data APIs for live market tracking',
        'Built responsive dashboard with advanced data visualizations',
        'Implemented user authentication and portfolio management system'
      ],
      liveLink: 'https://prognosis-stock-market-telf.vercel.app/',
      codeLink: 'https://github.com/signthecontract'
    },
    {
      title: 'ExcelWizard - Automated Data Analysis Tool',
      description: 'Advanced data analysis platform that transforms raw Excel data into comprehensive visualizations and personalized insights without manual effort. Automates data processing, cleaning, and report generation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80',
      tags: ['Python', 'Flask/Django', 'Pandas', 'Chart.js', 'Excel APIs'],
      status: 'Live',
      category: 'Data Analysis & Automation',
      featured: true,
      achievements: [
        'Automated complex data cleaning and preprocessing workflows',
        'Generated interactive visualizations from raw Excel files',
        'Built personalized insights engine using statistical analysis',
        'Reduced data analysis time from hours to minutes'
      ],
      liveLink: 'https://excelwizard-v1.onrender.com/',
      codeLink: 'https://github.com/signthecontract'
    }
  ];

  const academicProjects = [
    {
      title: 'Personal Virtual Assistant Application',
      description: 'Developed a desktop application with user authentication and database integration, featuring data storage, retrieval, and user feedback collection with modular code structure.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format&q=80',
      tags: ['Python', 'MySQL', 'HTML/CSS'],
      status: 'Completed',
      category: 'Full Stack Development',
      achievements: [
        'Implemented MySQL database schema for storing user data and interactions',
        'Created modular code structure with separate components',
        'Designed user authentication system'
      ]
      
    },
    {
      title: 'Student Performance Prediction Model',
      description: 'Built regression model to predict student grades based on study habits and attendance data using machine learning techniques and feature engineering.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      status: 'Completed',
      category: 'Machine Learning',
      achievements: [
        'Applied feature selection techniques to identify influential factors',
        'Achieved reasonable prediction accuracy through hyperparameter tuning',
        'Created visualizations showing correlation between variables and performance'
      ]
     
    },
    {
      title: 'Data Analysis Automation Scripts',
      description: 'Developed Python scripts to automate repetitive data cleaning and formatting tasks, significantly reducing manual processing time.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&q=80',
      tags: ['Python', 'Pandas', 'NumPy'],
      status: 'Completed',
      category: 'Data Analysis',
      achievements: [
        'Created functions for generating summary statistics and reports',
        'Implemented error handling and logging for robust execution',
        'Reduced manual data processing time significantly'
      ]
     
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Recent live projects and academic work showcasing expertise in data analysis, AI/ML, and full-stack development
        </p>
      </div>

      <div className="projects-container">
        <h3 className="subsection-title">Recent Live Projects</h3>
        <div className="projects-grid featured">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-button">
                      <ExternalLink size={16} /> Live Demo
                    </button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-button secondary">
                      <Github size={16} /> Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Academic & Learning Projects</h3>
        <div className="projects-grid academic">
          {academicProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-button secondary">
                      <ExternalLink size={16} /> View Details
                    </button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="project-link-button secondary">
                      <Github size={16} /> Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p>More projects and contributions available on <a href="https://github.com/signthecontract">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
