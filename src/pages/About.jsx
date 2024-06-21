import React from "react";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import StatsComponent from "../components/core/AboutPage/Stats";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-7xl flex-col justify-between gap-10 text-center text-white py-20">
          <header className="mx-auto lg:w-[70%]">
            <h1 className="text-4xl font-semibold">Welcome to Learn Programming</h1>
            <p className="mt-3 text-base font-medium text-richblack-300">
              Your go-to platform for mastering programming languages with the
              help of videos, blogs, and interactive content.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[30%] grid w-full grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="Banner 1" className="rounded-lg shadow-lg" />
            <img src={BannerImage2} alt="Banner 2" className="rounded-lg shadow-lg" />
            <img src={BannerImage3} alt="Banner 3" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-11/12 max-w-7xl flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col lg:w-1/2 gap-10">
              <h1 className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-4xl font-semibold text-transparent">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-gray-700">
                Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-gray-700">
                As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col lg:w-1/2 gap-10">
              <h1 className="bg-gradient-to-b from-red-500 to-orange-500 bg-clip-text text-4xl font-semibold text-transparent">
                Our Vision
              </h1>
              <p className="text-base font-medium text-gray-700">
                With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
              </p>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-10">
              <h1 className="bg-gradient-to-b from-blue-500 via-teal-300 to-green-300 bg-clip-text text-4xl font-semibold text-transparent">
                Our Mission
              </h1>
              <p className="text-base font-medium text-gray-700">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponent />

      <section className="mx-auto mt-20 flex w-11/12 max-w-7xl flex-col gap-10">
        <LearningGrid />
      </section>

      <section className="relative mx-auto my-20 w-11/12 max-w-7xl flex flex-col items-center gap-8 bg-richblack-900 text-white py-10">
        <ReviewSlider />
      </section>

      <div className="w-full bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default About;
