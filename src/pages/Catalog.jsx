// import React, { useEffect, useState } from 'react'
// import Footer from '../components/common/Footer'
// import { useParams } from 'react-router-dom'
// import { apiConnector } from '../services/apiconnector';
// import { categories } from '../services/apis';
// import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
// import Course_Card from '../components/core/Catalog/Course_Card';
// import CourseSlider from '../components/core/Catalog/CourseSlider';
// import { useSelector } from "react-redux"
// import Error from "./Error"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Courses() {
  return (
    <Container fluid className="courses-page">
      <h2 className="text-center my-4">Courses</h2>
      
      <section>
        <h3 className="text-center mb-4">Programming Language Courses</h3>
        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto" alt="JavaScript Basics" className="course-image"/>
              <div className="course-content">
                <h4>JavaScript Basics</h4>
                <p>Learn the fundamentals of JavaScript.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://s3.us-east-1.amazonaws.com/creator-assets.codedamn.com/codedamn-61897bfe60f1140008feb00d/COURSE_IMAGE/2023-02-12/eba1c4863eb1a6576514ccf2b138f6f5b53871e9" alt="Advanced React" className="course-image"/>
              <div className="course-content">
                <h4>Advanced React</h4>
                <p>Dive deeper into React.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://miro.medium.com/v2/resize:fit:700/1*3IcLSFuT8PQg4cUBaRXH1A.png" alt="Python for Beginners" className="course-image"/>
              <div className="course-content">
                <h4>Python for Beginners</h4>
                <p>Start coding with Python.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcj5c9GrUXQuaMQ7iOzivcWdOCdCWObB1PA&s" alt="Java Programming" className="course-image"/>
              <div className="course-content">
                <h4>Java Programming</h4>
                <p>Master Java programming language.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <h3 className="text-center mb-4">Skill Development Courses</h3>
        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://media.istockphoto.com/id/1335165816/video/4k-project-management-animated-tag-word-cloud-text-animation-seamless-loop.jpg?s=640x640&k=20&c=UkpeRcaVu7YU7I9jKFFDIiqmvYqXTX1Q-SkecslMQ0E=" alt="Project Management" className="course-image"/>
              <div className="course-content">
                <h4>Project Management</h4>
                <p>Learn effective project management skills.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://miro.medium.com/v2/resize:fit:680/1*ky5emAhi-jFeX8wv3jKhpg.jpeg" alt="Communication Skills" className="course-image"/>
              <div className="course-content">
                <h4>Communication Skills</h4>
                <p>Enhance your communication abilities.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://marketplace.canva.com/EAFN4RWJl8Y/1/0/1600w/canva-yellow-and-black-time-management-youtube-thumbnail-T8XohMw6_DE.jpg" alt="Time Management" className="course-image"/>
              <div className="course-content">
                <h4>Time Management</h4>
                <p>Improve your time management skills.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/criticalthinking-180706235438-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Critical Thinking" className="course-image"/>
              <div className="course-content">
                <h4>Critical Thinking</h4>
                <p>Develop critical thinking skills.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <h3 className="text-center mb-4">Application Development Courses</h3>
        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg" alt="Web Development" className="course-image"/>
              <div className="course-content">
                <h4>Web Development</h4>
                <p>Build modern web applications.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://www.orientsoftware.com/Themes/Content/Images/blog/2024-04-22/mobile-app-development-trend-thumbnail.jpg" alt="Mobile App Development" className="course-image"/>
              <div className="course-content">
                <h4>Mobile App Development</h4>
                <p>Create mobile applications.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://media.istockphoto.com/id/1349561701/video/4k-data-science-animated-tag-word-cloud-text-design-animation-seamless-loop.jpg?s=640x640&k=20&c=ynREPerZ-1ScYbVIFXq4eG5tq-mp343rAzwoQoRlhe0=" alt="Data Science" className="course-image"/>
              <div className="course-content">
                <h4>Data Science</h4>
                <p>Learn the essentials of data science.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-3">
            <div className="course-card">
              <img src="https://media.istockphoto.com/id/1339667588/photo/devops-concept.webp?b=1&s=170667a&w=0&k=20&c=Gx1L0v5kGFyosLZTrWMWlXF3IIE3JPvqy8BdHpF-pyI=" alt="DevOps Fundamentals" className="course-image"/>
              <div className="course-content">
                <h4>DevOps Fundamentals</h4>
                <p>Understand DevOps principles.</p>
                <Button variant="primary">Join Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}