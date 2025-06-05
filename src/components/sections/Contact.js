import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    // In a real scenario, you would send the data to a backend service
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted mx-auto section-subtitle">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Row>
              {/* Contact Info Cards */}
              <Col md={6} className="mb-4">
                <Card className="contact-card h-100">
                  <Card.Body className="d-flex">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="ms-3">
                      <h5 className="contact-title">Email</h5>
                      <p className="contact-info mb-0">
                        <a href="mailto:your.email@example.com">dbov93@gmail.com</a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="mb-4">
                <Card className="contact-card h-100">
                  <Card.Body className="d-flex">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ms-3">
                      <h5 className="contact-title">Location</h5>
                      <p className="contact-info mb-0">Atlanta, GA, USA</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="mb-4">
                <Card className="contact-card h-100">
                  <Card.Body className="d-flex">
                    <div className="contact-icon">
                      <FaGithub />
                    </div>
                    <div className="ms-3">
                      <h5 className="contact-title">GitHub</h5>
                      <p className="contact-info mb-0">
                        <a href="https://github.com/aviakubo" target="_blank" rel="noopener noreferrer">
                          github.com/aviakubo
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} className="mb-4">
                <Card className="contact-card h-100">
                  <Card.Body className="d-flex">
                    <div className="contact-icon">
                      <FaLinkedin />
                    </div>
                    <div className="ms-3">
                      <h5 className="contact-title">LinkedIn</h5>
                      <p className="contact-info mb-0">
                        <a href="https://linkedin.com/in/dannyyacks" target="_blank" rel="noopener noreferrer">
                          linkedin.com/in/dannyyacks
                        </a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-4">
          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-center mb-4">Send Me a Message</h3>
                
                {formStatus.submitted ? (
                  <Alert variant={formStatus.success ? 'success' : 'danger'}>
                    {formStatus.message}
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formEmail">
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                    
                    <div className="text-center">
                      <Button type="submit" variant="primary" size="lg" className="submit-btn">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;