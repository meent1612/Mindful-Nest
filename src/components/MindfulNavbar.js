// components/layout/MindfulNavbar.js (Updated)
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import '../styles/MindfulNavbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MindfulNavbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
              
              {/* Conditionally render login/register or user menu */}
              {user ? (
                <>
                  <Nav.Link className="nav-link-utility" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                  <span className="nav-user-info">Hello, {user.name}</span>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-link-utility">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="nav-link-utility">
                    Register
                  </Nav.Link>
                </>
              )}
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
              <Link to="/health-wellness-hub" className="nav-link-main">
                Wellness Hub
              </Link>
              {user && (
                <Link to="/problem-checker" className="nav-link-main">
                  Problem Checker
                </Link>
              )}
            </nav>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MindfulNavbar;