import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Learn Programming is a platform dedicated to providing quality education on programming languages and technologies. Our mission is to make learning accessible and engaging for everyone.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#videos" className="footer-link">Videos</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@learnprogramming.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="footer-link"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com" className="footer-link"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="footer-link"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com" className="footer-link"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; 2024 Learn Programming. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};