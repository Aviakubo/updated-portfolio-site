import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import { projects } from '../../data/projects';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const handleModalOpen = (projectId) => {
    setActiveProject(projects.find(project => project.id === projectId));
  };
  
  const handleModalClose = () => {
    setActiveProject(null);
  };
  
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">My Projects</h2>
          <p className="lead text-muted mx-auto section-subtitle">
            A selection of my favorite projects showcasing my skills in front-end development and AI/ML.
          </p>
        </div>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 project-card">
                <div className="project-image-container">
                  <Card.Img variant="top" src={project.image || '/placeholder-image.jpg'} alt={project.title} />
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-badge"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{project.description}</Card.Text>
                  
                  <div className="mb-3 flex-wrap d-flex gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} bg="light" text="dark" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark d-flex align-items-center"
                      >
                        <FaGithub className="me-1" /> Code
                      </a>
                    )}
                    
                    <Button 
                      variant="link"
                      className="text-primary p-0"
                      onClick={() => handleModalOpen(project.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Project Details Modal */}
        <Modal 
          show={activeProject !== null} 
          onHide={handleModalClose}
          size="lg"
          centered
        >
          {activeProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{activeProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mb-4">
                  <img 
                    src={activeProject.image || '/placeholder-image.jpg'} 
                    alt={activeProject.title}
                    className="img-fluid rounded mb-3"
                  />
                  <p className="lead">{activeProject.longDescription}</p>
                </div>
                
                <Row className="mb-4">
                  <Col md={6}>
                    <h5 className="fw-bold">Technical Challenges</h5>
                    <ul className="ps-3">
                      {activeProject.challenges && activeProject.challenges.map((challenge, index) => (
                        <li key={index} className="mb-2">{challenge}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h5 className="fw-bold">Key Features</h5>
                    <ul className="ps-3">
                      {activeProject.features && activeProject.features.map((feature, index) => (
                        <li key={index} className="mb-2">{feature}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {activeProject.technologies.map((tech) => (
                    <Badge key={tech} bg="light" text="dark" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="d-flex justify-content-between w-100">
                  {activeProject.github && (
                    <a 
                      href={activeProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      <FaGithub className="me-2" /> View Code
                    </a>
                  )}
                  
                  {activeProject.liveDemo && (
                    <a 
                      href={activeProject.liveDemo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt className="me-2" /> Live Demo
                    </a>
                  )}
                </div>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default Projects;