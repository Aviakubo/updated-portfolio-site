import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  // Your actual experience data
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'BigPanda',
      location: 'Remote',
      period: 'April 2024 - September 2024',
      description: 'Worked on AI-powered IT operations solutions, focusing on chatbot development, data indexing, and clustering techniques.',
      responsibilities: [
        'Collaborated as a core member of the innovation team to design and implement features for an AI chatbot for IT operations, including automated after action reports and executive summaries, reducing incident response time by 25%',
        'Spearheaded data indexing and preparation for AI model training, processing over 100,000 data points to improve chatbot response accuracy by 40%',
        'Applied k-means++ clustering and dimensionality reduction techniques (PCA, t-SNE) to optimize categorization processes, achieving 35% faster data processing time',
        'Partnered with design teams to implement client-specific requirements, increasing client satisfaction scores by 20% for IT incident handling'
      ]
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Accenture',
      location: 'Atlanta, GA',
      period: 'May 2022 - April 2024',
      description: 'Focused on frontend development, microservices architecture, and WordPress development with an emphasis on performance optimization and security.',
      responsibilities: [
        'Built and optimized 15+ Angular and Storybook components using RxJS and Jasmine, achieving a 20% increase in page load speed and improved UI responsiveness',
        'Designed and deployed a 4-microservice system on AWS EKS with Docker and CI/CD pipelines, supporting 1 million daily requests with 99.9% uptime',
        'Created 10+ custom Gutenberg Blocks across multiple WordPress themes, leading to a 25% increase in engagement metrics',
        'Developed an authentication microservice using Bcrypt and JSON web tokens, reducing unauthorized access incidents by 30%',
        'Built a custom logging system using Pino and NestJS, improving error detection by 40% and reducing debugging time'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Work Experience</h2>
          <p className="lead text-muted mx-auto section-subtitle">
            My professional journey in software development and AI solutions.
          </p>
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.period}</div>
              <Card className="timeline-content">
                <Card.Body>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company} <span className="timeline-location">• {exp.location}</span></h4>
                  <p className="timeline-description">{exp.description}</p>
                  
                  <h5 className="timeline-responsibilities-title">Key Contributions:</h5>
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;