import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  // Group skills by category
  const skillCategories = {
    "Frontend Development": [
      "JavaScript", "TypeScript", "React", "Angular", "HTML5", "CSS3", "Responsive Design"
    ],
    "Backend Development": [
      "Node.js", "Express.js", "MongoDB", "Python", "RESTful APIs"
    ],
    "AI & Machine Learning": [
      "Machine Learning Fundamentals", "Natural Language Processing", "Chatbot Development"
    ],
    "Tools & DevOps": [
      "Git", "GitHub", "VS Code", "npm/yarn", "Webpack"
    ]
  };

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
          <p className="lead text-muted mx-auto section-subtitle">
            The technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <Row className="g-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Col lg={6} key={category}>
              <Card className="h-100 skills-card">
                <Card.Body>
                  <h3 className="card-title mb-4 skill-category">{category}</h3>
                  
                  <div className="skill-tags">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="skill-badge m-1"
                        bg="light"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;