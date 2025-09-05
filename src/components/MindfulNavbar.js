import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import '../styles/MindfulNavbar.css';
import { Link } from 'react-router-dom';

const MindfulNavbar = () => {
  return (
    <>
      {/* Top Container - Utility Links (Collapsible Navbar) */}
      <Navbar expand="lg" className="utility-navbar">
        <Container>
          <Navbar.Toggle aria-controls="utility-nav" className="utility-toggle" />
          <Navbar.Collapse id="utility-nav">
            <Nav className="utility-nav-container">
              <Nav.Link as={Link} to="/helplines" className="nav-link-utility">
                Helplines
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-utility">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-utility">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/resources" className="nav-link-utility">
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link-utility">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link-utility">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Container - Main Categories (Static, non-collapsible) */}
      <div className="main-categories-container">
        <Container>
          <div className="main-categories-content">
            <Link to="/" className="navbar-brand-custom">
              Mindful Nest
            </Link>
            <nav className="main-categories-nav">
              <Link to="/mental-health" className="nav-link-main">
                Mental Health
              </Link>
              <Link to="/health-wellness" className="nav-link-main">
                Health & Wellness
              </Link>
              <Link to="/relationships" className="nav-link-main">
                Relationships
              </Link>
              <Link to="/treatment" className="nav-link-main">
                Treatment
              </Link>
            <Link to="/mental-health-journal" className="nav-link-main">
                Mental Health Journal
              </Link>
            </nav>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MindfulNavbar;