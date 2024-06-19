import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Contact()  {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      <section className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through any of the methods below.</p>
      </section>

      <Container className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <Row className="flex flex-row items-center gap-3">
          <Col md={4} className="text-lg font-semibold text-richblack-5">
            <FontAwesomeIcon icon={faPhone} size="3x" className="contact-icon" />
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </Col>
          <Col md={4} className="text-lg font-semibold text-richblack-5">
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
            <h3>Email</h3>
            <p>support@learnprogramming.com</p>
          </Col>
          <Col md={4} className="text-lg font-semibold text-richblack-5">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="contact-icon" />
            <h3>Address</h3>
            <p>123 Learning St, Education City, ED 12345</p>
          </Col>
        </Row>

        <Row className="flex flex-row items-center gap-3">
          <Col className="text-lg font-semibold text-richblack-5">
            <h2>Get in Touch</h2>
            <p>Feel free to drop us a message below, and we'll get back to you as soon as possible.</p>
          </Col>
        </Row>

        <Row className="flex flex-row items-center gap-3">
          <Col>
            <Card className="demo-call-card">
              <Card.Body className="text-center">
                <Card.Title>Schedule a Demo Call</Card.Title>
                <Card.Text>
                  Want to know more about our platform? Schedule a demo call with one of our experts.
                </Card.Text>
                <Button variant="primary">Book a Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};





// "flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6"

// "flex flex-col gap-[2px] p-3 text-sm text-richblack-200"

// "flex flex-row items-center gap-3"

// "text-lg font-semibold text-richblack-5"