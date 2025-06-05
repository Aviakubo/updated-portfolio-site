import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center text-md-start">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                <span className="d-block">Hi, I'm [David Yakubov]</span>
                <span className="d-block mt-2 gradient-text">
                  Software Developer & AI Enthusiast
                </span>
              </h1>
              
              <p className="lead text-light mb-5">
                Building elegant user experiences and exploring the frontiers of AI
              </p>
              
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="#projects"
                  className="custom-btn-primary"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  href="#contact"
                  className="custom-btn-outline"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="chevron"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;