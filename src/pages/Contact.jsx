import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from "../components/common/Footer";

const Contact = () => {
  return (
    <div className="bg-richblack-800 text-white">
      <div className="mx-auto mt-20 flex w-11/12 max-w-7xl flex-col justify-between gap-10 lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%] flex flex-col gap-6 rounded-xl p-4 lg:p-6 bg-richblack-900">
          <section className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
            <h1 className="text-2xl font-bold text-white">Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us through any of the methods below.</p>
          </section>

          <div className="flex flex-col gap-6 p-3 text-sm text-richblack-200">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="text-lg font-semibold text-richblack-5">
                <FontAwesomeIcon icon={faPhone} size="3x" className="contact-icon" />
                <h3 className="mt-2 text-white">Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="text-lg font-semibold text-richblack-5">
                <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
                <h3 className="mt-2 text-white">Email</h3>
                <p>support@learnprogramming.com</p>
              </div>
              <div className="text-lg font-semibold text-richblack-5">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="contact-icon" />
                <h3 className="mt-2 text-white">Address</h3>
                <p>123 Learning St, Education City, ED 12345</p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-white">Get in Touch</h2>
              <p>Feel free to drop us a message below, and we'll get back to you as soon as possible.</p>
            </div>

            <div className="mt-6">
              <div className="bg-richblack-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Schedule a Demo Call</h3>
                <p className="mt-2 text-richblack-300">
                  Want to know more about our platform? Schedule a demo call with one of our experts.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white">Book a Demo</button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-white">Follow Us</h2>
              <div className="flex justify-center gap-4 mt-2">
                <a href="https://www.facebook.com" className="text-xl text-white hover:text-blue-500">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.twitter.com" className="text-xl text-white hover:text-blue-400">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com" className="text-xl text-white hover:text-pink-500">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com" className="text-xl text-white hover:text-blue-700">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%] flex flex-col gap-6 rounded-xl p-4 lg:p-6 bg-richblack-900">
          {/* ContactForm placeholder */}
          <div className="bg-richblack-700 rounded-lg p-6 text-center text-white">
            <h3 className="text-2xl font-bold">Contact Form Placeholder</h3>
            <p className="mt-2 text-richblack-300">This is where the contact form will be.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
