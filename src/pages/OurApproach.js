import React from 'react';
import { Link } from 'react-router-dom';

const OurApproach = () => (
  <div className="font-comfortaa antialiased text-gray-900">
     
     <section className="container mx-auto px-4 py-28 justify-center flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-center">
              At BlueRays Online Tuition, we believe that every student is unique, with their own set of strengths, weaknesses, and learning styles. That's why we've adopted a student-centered approach that prioritizes individual student needs and fosters a personalized learning experience for each learner.</p>
        </div>
     </section>

     <hr/>

      {/*section 1*/}
      <section className="container mx-auto px-4 py-6 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-1/2">
           <img src="/images/ECD-TT-3.jpg" 
           alt="image error" 
           className="w-full h-auto rounded-lg"
            />
          </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-red-800 text-2xl text-center font-bold mb-4">Student-Centered Approach</h2>
            <p className="text-lg text-center"> At the heart of our philosophy is the recognition that no two students learn in exactly the same way. Our student-centered approach places the individual student at the forefront of the learning process, tailoring instruction and support to meet their specific needs, interests, and abilities.</p>
            <h3 className="text-red-800 text-lg text-center"> Rationale </h3>
            <p className="text-lg text-center">Every student has their own learning pace, preferences, and areas of focus. By centering our approach around the individual student, we can create a learning environment that is conducive to their growth and success.<br/> Personalized learning promotes student engagement and motivation by allowing them to take ownership of their learning journey. When students feel seen, heard, and understood, they are more likely to be actively involved in the learning processes and achieve their academic goals.</p>
        </div>
      </section>

      <hr/>

      {/*section 2 */}
      <section className="container mx-auto px-4 py-16 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Inquiry-Based Approach</h2>
            <p className="text-lg text-center">In addition to our student-centered approach, we embrace an inquiry-based learning model that encourages curiosity, critical thinking, and problem-solving skills. Rather than simply providing answers, we empower students to ask questions, explore topics in-depth, and discover knowledge through active investigation.</p>
            <h3 className="text-red-800 text-lg text-center"> Rationale </h3>
            <p className="text-lg text-center">Inquiry-based learning stimulates intellectual curiosity and promotes a deeper understanding of concepts. By encouraging students to ask questions and seek answers, we foster a sense of intellectual curiosity and a lifelong love for learning.<br/>This model promotes the development of essential 21st-century skills such as critical thinking, creativity, and collaboration. In an increasingly complex and interconnected world, these skills are invaluable for success in both academic and professional endeavors.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
         <img 
         src="/images/nav31b-Inqury.jpg" 
         alt="image error" 
         className="w-full h-auto rounded-lg"
         />
        </div>
     </section>

     <hr/>

      {/* Section 3 */}
     <section className="container mx-auto px-4 py-16 justify-center flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-center">At BlueRays Online Tuition, we believe that every student is unique, with their own set of strengths, weaknesses, and learning styles. That's why we've adopted a student-centered approach that prioritizes individual student needs and fosters a personalized learning experience for each learner.<br/>By placing students at the center of the learning experience and empowering them to explore, inquire, and discover, we strive to unlock their full potential and prepare them for a future filled with endless possibilities.</p>
        </div>
     </section>

     {/* Button Section */}
     <section className="container mx-auto px-4 flex flex-wrap items-center justify-center">
       <div className="flex justify-center mb-8">
        <div className="bg-red-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
         <Link to="/Register">Enroll Now</Link>
        </div>
       </div>
      </section> 
   </div> 
);

export default OurApproach;
