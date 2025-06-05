import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="footer-logo">&lt;David Yakubov /&gt;</h3>
            <p className="footer-tagline">Front-End Developer & AI Enthusiast</p>
          </Col>
          
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <p className="footer-copyright">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="footer-location">
              Based in Atlanta, GA
            </p>
          </Col>
          
          <Col lg={4} className="text-center text-lg-end">
            <div className="footer-social">
              <a href="https://github.com/aviakubo" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/dannyyacks" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="mailto:dbov93@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;