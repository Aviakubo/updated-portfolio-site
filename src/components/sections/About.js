import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCamera, FaHatWizard, FaGamepad, FaCocktail } from 'react-icons/fa';
import './About.css';
import profileImage from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image with card-themed frame for magic interest */}
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="profile-image-container">
              <div className="card-frame">
                <div className="profile-image">
                  <img 
                    src={profileImage}
                    alt="David Yakubov"
                    className="img-fluid"
                  />
                  
                  {/* Card suit indicators in corners (for magic interest) */}
                  <div className="card-suit top-left">♥</div>
                  <div className="card-suit top-right">♦</div>
                  <div className="card-suit bottom-left">♣</div>
                  <div className="card-suit bottom-right">♠</div>
                </div>
              </div>
            </div>
          </Col>
          
          {/* About Content */}
          <Col lg={8}>
            <div className="section-heading mb-4">
              <h2 className="display-5 fw-bold">About Me</h2>
              <div className="heading-underline"></div>
            </div>
            
            <p className="lead mb-4">
              I'm a passionate front-end developer with 3 years of experience building engaging web applications 
              and exploring the exciting intersection of web development and artificial intelligence.
            </p>
            
            <p className="mb-4">
              My journey in tech has given me the opportunity to work on diverse projects from interactive 
              web applications to AI-powered chatbots. I specialize in creating intuitive user experiences 
              using modern JavaScript frameworks while maintaining clean, efficient code.
            </p>
            
            <p className="mb-4">
              Based in Atlanta, GA, I'm currently focused on developing innovative applications 
              that leverage the power of machine learning algorithms to create personalized user experiences.
            </p>
            
            {/* Personal interests with subtle styling cues */}
            <Card className="interest-card mt-4">
              <Card.Body>
                <h5 className="fw-bold mb-3">Beyond Coding</h5>
                
                <Row xs={2} md={4} className="g-3 text-center">
                  {/* Photography */}
                  <Col>
                    <div className="interest-icon">
                      <FaCamera />
                    </div>
                    <p className="interest-label">Photography</p>
                  </Col>
                  
                  {/* Magic */}
                  <Col>
                    <div className="interest-icon magic">
                      <FaHatWizard />
                    </div>
                    <p className="interest-label">Magic</p>
                  </Col>
                  
                  {/* Gaming */}
                  <Col>
                    <div className="interest-icon gaming">
                      <FaGamepad />
                    </div>
                    <p className="interest-label">Gaming</p>
                  </Col>
                  
                  {/* Bartending */}
                  <Col>
                    <div className="interest-icon bartending">
                      <FaCocktail />
                    </div>
                    <p className="interest-label">Bartending</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;