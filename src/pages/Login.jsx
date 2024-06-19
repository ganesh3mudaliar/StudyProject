import loginImage from "../assets/Images/LoginImage.png"
// import Template from "../components/core/Auth/Template"
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import loginImage from '..\assets\Images\LoginImage.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center">
        <Col className="left-column">
          <img src={loginImage} alt="Login" className="imglogin" />
        </Col>
        <Col className="right-column">
          <div className="login-card">
            <h2 className="text-center mb-4">Welcome Back!</h2>
            <Form>
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
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <div className="text-center mt-3">
                <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}