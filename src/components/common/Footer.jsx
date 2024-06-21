import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-gray-800 text-gray-300">
      <Container className="mx-auto">
        <Row className="flex flex-wrap -mx-4">
          <Col md={4} className="px-4 mb-4">
            <h5 className="text-xl font-bold mb-2">About Us</h5>
            <p className="text-sm">Learn Programming is a platform dedicated to providing quality education on programming languages and technologies. Our mission is to make learning accessible and engaging for everyone.</p>
          </Col>
          <Col md={4} className="px-4 mb-4">
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul className="list-none">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#videos" className="footer-link">Videos</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="px-4 mb-4">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <p className="text-sm">Email: support@learnprogramming.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">Follow us:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="footer-link"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com" className="footer-link"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="footer-link"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com" className="footer-link"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
          <Col md={12} className="text-center">
            <p className="text-sm">&copy; 2024 Learn Programming. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
