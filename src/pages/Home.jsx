import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';


import Footer from "../components/common/Footer"
// import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <div className='homie'>
      <section className="jumbotron-bg text-center">
        <div className="jumbotron-content">
          <h1>Welcome to Learn Programming</h1>
          <p className="lead">Your go-to platform for mastering programming languages with the help of videos, blogs, and interactive content.</p>
        </div>
      </section>
      <Row className="mb-4">
          <Col>
            <h2>Featured Courses</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Course Videos</Card.Title>
                <Card.Text>
                  Access a wide range of programming tutorials and courses.Explore the course of your field of interest and enjoy learning!
                </Card.Text>
                <Button variant="primary" href="#videos" onClick={() => navigate("components/pages/Courses")}>Access Videos</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Learn with Tutors</Card.Title>
                <Card.Text>
                  Stay updated with the latest trends and techniques in programming with skilled professionals.
                </Card.Text>
                <Button variant="primary" href="#connect" onClick={() => navigate("components/pages/Tutors")}>Connect</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Join the Community</Card.Title>
                <Card.Text>
                  Interact with peers and experts in your field to stay updated with the latest knowledge and insights.  
                </Card.Text>
                <Button variant="primary" href="#community" onClick={() => navigate("components/pages/Community")}>Join Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

       
        

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
      <Row className="mb-4">
          <Col>
            <h2>Why Choose Us?</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <h4>Expert Instructors</h4>
            <p>Learn from industry experts who have real-world experience in programming.</p>
          </Col>
          <Col md={6}>
            <h4>Flexible Learning</h4>
            <p>Access courses and tutorials at your own pace, from anywhere in the world.</p>
          </Col>
        </Row>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <Row className="mb-4">
          <Col>
            <h2>Testimonials</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"Great platform for learning programming. The courses are well-structured and easy to follow."</p>
                  <footer className="blockquote-footer">Johny Depp</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"I improved my coding skills significantly with the help of Learn Programming. Highly recommended!"</p>
                  <footer className="blockquote-footer">Will Smith</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote my-20">
                  <p>"The community here is very supportive. I've gained valuable insights and made new connections."</p>
                  <footer className="blockquote-footer">Michael Jordan</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  )
}

