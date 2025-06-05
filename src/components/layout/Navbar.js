import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const Navbar = ({ scrollPosition }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];
  
  // Determine which section is currently in view
  useEffect(() => {
    const determineActiveSection = () => {
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          return navItems[i].id;
        }
      }
      return 'hero';
    };
    
    setActiveSection(determineActiveSection());
  }, [scrollPosition, navItems]);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setExpanded(false);
  };
  
  // Navbar styling based on scroll position
  const navbarClass = scrollPosition > 50 
    ? 'custom-navbar scrolled' 
    : 'custom-navbar transparent';
  
  return (
    <BootstrapNavbar 
      expand="md" 
      fixed="top" 
      className={navbarClass}
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="navbar-brand-custom"
        >
          &lt;David Yakubov /&gt;
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(item => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;