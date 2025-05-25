import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="font-comfortaa antialiased text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-screen">
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-white bg-opacity-50">
          <img
            src="/images/pexels-katerina-holmes-5905710-homepage.jpg"
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl">
            Empowering Students To Excel
          </h1>
          <p className="mt-4 text-gray-800 text-lg sm:text-xl lg:text-2xl">
            Education For Individual Student Needs
          </p>
          <div className="mt-8">
            <Link
              to="/Register"
              className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
        </div>
      </section>

      <hr />

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl text-center text-red-800 font-bold mb-4">
            Welcome to BlueRays Online Tuition <br /> Your Gateway to Academic Success
          </h2>
          <p className="text-lg text-center leading-relaxed">
            At BlueRays, we believe in the power of personalized learning to unlock every student's full potential. Whether
            you're aiming for top grades, preparing for standardized tests, or seeking to deepen your understanding of
            challenging subjects, our dedicated team of expert tutors is here to guide you on your educational journey. <br />
            We offer a range of services designed to help you achieve your goals. From personalized tutoring to group
            classes, we have something for everyone.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <img
            src="images/pexels-julia-m-cameron-4144294.jpg"
            alt="Slide 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <hr />

      {/* Why BlueRays Section */}
      <section className="container mx-auto px-4 py-4">
        <h2 className="text-2xl text-center text-red-800 font-bold mb-4">
          Why BlueRays Online Tuition?
        </h2>

        <div className="flex flex-wrap -mx-4 mb-16">
          {/* Personalized Study Plan */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src="images/pexels-julia-m-cameron-4144100.jpg"
                alt="Personalized Study Plan"
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-8">
                <h3 className="text-red-800 text-2xl text-center font-bold mb-4">
                  Personalized Study Plan
                </h3>
                <p className="text-lg text-center">
                  At BlueRays we understand that every student has unique learning styles and goals. That's why we
                  customize our tutoring sessions to meet specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Expert Tutors */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src="images/pexels-katerina-holmes-5905923.jpg"
                alt="Expert Tutors"
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-8">
                <h3 className="text-2xl text-red-800 text-center font-bold mb-4">Expert Tutors</h3>
                <p className="text-lg text-center">
                  Our tutors are highly qualified and passionate about teaching. Trust them to provide the highest quality
                  education.
                </p>
              </div>
            </div>
          </div>

          {/* Flexible Scheduling */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src="images/sonja-langford-eIkbSc3SDtI-unsplash.jpg"
                alt="Flexible Scheduling"
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-8">
                <h3 className="text-2xl text-red-800 text-center font-bold mb-4">Flexible Scheduling</h3>
                <p className="text-lg text-center">
                  Our scheduling options are designed to fit seamlessly into your life, ensuring you can learn at your own
                  pace.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Subject Coverage */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src="images/kimberly-farmer-lUaaKCUANVI-unsplash.jpg"
                alt="Comprehensive Subject Coverage"
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-8">
                <h3 className="text-2xl text-center text-red-800 font-bold mb-4">
                  Comprehensive Subject Coverage
                </h3>
                <p className="text-lg text-center">
                  From mathematics and science to test preparation, we cover a wide range of subjects and grade levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-4 text-center">
        <h2 className="text-2xl text-red-800 font-bold mb-4">Get Started Today</h2>
        <p className="text-lg leading-relaxed mb-8">
          Ready to excel? Sign up for tutoring sessions with BlueRays today and unlock your potential. Contact us for more
          details!
        </p>
        <Link
          to="/Register"
          className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Enroll Now
        </Link>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl text-red-800 font-bold mb-4">Questions?</h2>
        <p className="text-lg leading-relaxed">
          Check out our
          <a href="Frequently Asked Questions.html" className="hover:text-red-800 underline mx-1">
            FAQ page
          </a>
          , call us at +254(0)114258707, or email us at
          <a href="mailto:blueraysonlinetuition@gmail.com" className="hover:text-red-800 underline mx-1">
            blueraysonlinetuition@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Homepage;
