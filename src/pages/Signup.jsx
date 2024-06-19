import signupImage from "../assets/Images/SignupImage.png"
// import Template from "../components/core/Auth/Template"
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import signupImage from '..assets\Images\SignupImage.png';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container fluid className="signup-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col className="left-column">
          <img src={signupImage} alt="Signup" className="imgsignup" />
        </Col>
        <Col md={6} lg={4} className="right-column">
          <div className="signup-card p-4 shadow">
            <h2 className="text-center mb-4">Create Account</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                />
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  className="password-toggle-icon" 
                  onClick={togglePasswordVisibility} 
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="position-relative">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password" 
                />
                <FontAwesomeIcon 
                  icon={showConfirmPassword ? faEyeSlash : faEye} 
                  className="password-toggle-icon" 
                  onClick={toggleConfirmPasswordVisibility} 
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}