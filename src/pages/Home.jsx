import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Footer from "../components/common/Footer"
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
    <div className="bg-gray-100">
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-7xl flex-col items-center justify-between gap-8 text-black">
        <section className="bg-gradient-to-r from-green-600 to-green-900 text-center py-10 text-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to Learn Programming</h1>
            <p className="text-lg">Your go-to platform for mastering programming languages with the help of videos, blogs, and interactive content.</p>
          </div>
        </section>
        <div className="w-full py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Featured Courses</h2>
          <Row className="mb-4">
            <Col md={4}>
              <Card className="course-card bg-white shadow-lg">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title className="text-black">Course Videos</Card.Title>
                  <Card.Text className="text-gray-700">
                    Access a wide range of programming tutorials and courses. Explore the course of your field of interest and enjoy learning!
                  </Card.Text>
                  <Button variant="primary" className="bg-blue-500" onClick={() => navigate("components/pages/Courses")}>Access Videos</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="course-card bg-white shadow-lg">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title className="text-black">Learn with Tutors</Card.Title>
                  <Card.Text className="text-gray-700">
                    Stay updated with the latest trends and techniques in programming with skilled professionals.
                  </Card.Text>
                  <Button variant="primary" className="bg-blue-500" onClick={() => navigate("components/pages/Tutors")}>Connect</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="course-card bg-white shadow-lg">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title className="text-black">Join the Community</Card.Title>
                  <Card.Text className="text-gray-700">
                    Interact with peers and experts in your field to stay updated with the latest knowledge and insights.  
                  </Card.Text>
                  <Button variant="primary" className="bg-blue-500" onClick={() => navigate("components/pages/Community")}>Join Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Code Section 1 */}
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
            codeColor={"text-yellow-500"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="/one">One</a><a href="/two">Two</a><a href="/three">Three</a></nav>\n</body>\n</html>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Why Choose Us?</h2>
          <Row className="mb-4">
            <Col md={6}>
              <h4 className="text-xl font-semibold mb-2">Expert Instructors</h4>
              <p className="text-gray-700">Learn from industry experts who have real-world experience in programming.</p>
            </Col>
            <Col md={6}>
              <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
              <p className="text-gray-700">Access courses and tutorials at your own pace, from anywhere in the world.</p>
            </Col>
          </Row>

          <h2 className="text-2xl font-semibold text-center mb-6">Testimonials</h2>
          <Row>
            <Col md={4}>
              <Card className="testimonial-card bg-white shadow-lg">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="text-gray-700">"Great platform for learning programming. The courses are well-structured and easy to follow."</p>
                    <footer className="blockquote-footer text-gray-500">Johny Depp</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card bg-white shadow-lg">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="text-gray-700">"I improved my coding skills significantly with the help of Learn Programming. Highly recommended!"</p>
                    <footer className="blockquote-footer text-gray-500">Will Smith</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card bg-white shadow-lg">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="text-gray-700">"The community here is very supportive. I've gained valuable insights and made new connections."</p>
                    <footer className="blockquote-footer text-gray-500">Michael Jordan</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Timeline Section */}
          <TimelineSection />

          {/* Learning Language Section */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-7xl flex-col items-center justify-between gap-8 bg-black text-white py-10">
        {/* Become an Instructor section */}
        <InstructorSection />
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  )
}
