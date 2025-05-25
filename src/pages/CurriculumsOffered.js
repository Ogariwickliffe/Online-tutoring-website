import React from 'react';

const Curriculumsoffered = () => (
  <div className="font-comfortaa antialiased text-gray-900">

    <section className="container mx-auto px-4 py-28 flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Curriculums Offered</h2>
        <p className="text-lg text-center">At BlueRays Online Tuition, we offer a diverse range of curriculums designed to cater for unique educational needs of students across various stages of their academic journey. Whether you're a high school student preparing for key examinations or college student delving deeper into specialized subjects, our comprehensive offerings ensure that you have access to the resources and support you need to succeed.</p>
      </div>
    </section>
    <hr />

    {/* Section 1 */}
    <section className="w-full md:w-1/2 px-4 mb-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:ml-8">
          <h2 className="text-2xl text-center text-red-800 font-bold mb-4">High School Curriculums</h2>
        </div>
      </div>
    </section>

    {/*Main Content 1 */}
    <main className="container mx-auto px-4 py-4">
      {/*Side-by-Side Sections */}
      <div className="flex flex-wrap -mx-4 mb-16">
        {/*-- Section 1 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/Cambridge Curriculum.png" alt="Image 1" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-red-800 text-2xl text-center font-bold mb-4">Cambrige Curriculum</h2>
              <p className="text-lg text-center">From Key Stages 3 to A level, our Cambridge cirriculum offerings provide a rigorous and internationally recognized education that prepares students for success in higher education and beyond. With a focus on critical thinking, problem-solving, independent learning, students engage with a range of subjects, including Mathematics, Sciences, Humanities, and Languages.</p>
            </div>
          </div>
        </section>

        {/*-- Section 2 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/American Curriculum.png" alt="Image 2" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-red-800 text-center font-bold mb-4">American Curriculum</h2>
              <p className="text-lg text-center">Our American Curriculum caters for students in grades 9 through 12, offering a holistic education that emphasizes both academic rigor and personal development. With a diverse array of subjects, including Mathematics, Science, English, Social Studies, and Electives, students receive a well-rounded education that prepares them for college and career success.</p>
            </div>
          </div>
        </section>

        {/*-- Section 3 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/ib_9244_page_2DC7FFC56F7CDBBD393684EB5F523547.jpg" alt="Image 3" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-red-800 text-center font-bold mb-4">IB Curriculum</h2>
              <p className="text-lg text-center">The IB curriculuma at BlueRays Online Tuition is designed to foster international-mindedness and intercultural understaning while promoting academic excellence. With a focus on inquiry-based learning, studenta engage with challenging and comprehensive curriculum that includes sucjects such as Mathematics, Sciences, Languages, Humanities, and the Arts.</p>
            </div>
          </div>
        </section>

        {/*-- Section 4 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/pexels-werner-pfennig-6482215.jpg" alt="Image 4" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-center text-red-800 font-bold mb-4">8-4-4 & CBC Curriculums (Kenya)</h2>
              <p className="text-lg text-center">For students following Kenyan Education System (CBC & 8-4-4), we offer tailored support and resources to navigate the curriculum requirements and excell in their studies. From Mathematics and Sciences to Languages and Humanities, our expert tutors offer personalized guidance and instruction to help students achieve their academic goals.</p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <hr />

    {/*-- Section 5 --*/}
    <section className="w-full md:w-1/2 px-4 mb-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:ml-8">
          <h2 className="text-2xl text-center text-red-800 font-bold mb-4">College Curriculums</h2>
        </div>
      </div>
    </section>


    {/*main content 2 */}
    <main className="container mx-auto px-4 py-4">
      {/*side by side sections*/}
      <div className="flex flex-wrap -mx-4 mb-16">
        {/*-- Section 1 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/antoine-dautry-05A-kdOH6Hw-unsplash.jpg" alt="Image 1" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-red-800 text-2xl text-center font-bold mb-4">Mathematics</h2>
              <p className="text-lg text-center">Our college-level Mathematics course cover a wide range of topics, including Calculus, College Algebra, Probability and Statics, and advanced topics such as Complex Analysis, Numerical Analysis,and Functional Analysis. With a focus on developing problem-solving skills and mathematical reasoning, students gain a deep understanding of fundamental concepts and their applications.</p>
            </div>
          </div>
        </section>

        {/*-- Section 2 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/images (2).jpeg" alt="Image 2" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-red-800 text-center font-bold mb-4">Computer Science and Programming</h2>
              <p className="text-lg text-center">BlueRays Online Tuition offers cources in computer science and Programming, including instruction in the Python Programming Language and Coding with HTML and JavaScript. Whether you're a beginner or advaced coder, our courses provide hands-on experience and practical skills that are essential for success in today's digital world.</p>
            </div>
          </div>
        </section>

                {/*-- Section 3 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="/images/jeshoots-com-5EKw8Z7CgE4-unsplash.jpg" alt="Image 3" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Physics</h2>
              <p className="text-lg text-center">In our physics cources, students delve into the principles of classical and modern physics, exploring topics such as Mechanics, Electromagnetism, Thermodynamics, and Quantum Mechanics. With the focus on experimentation and problem solving, students gain an understanding of the laws that govern the universe and develop the critical thinking skills needed to tackle complex scientific problems</p>
            </div>
          </div>
        </section>

        {/*-- Section 4 --*/}
        <section className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="images/download.jpeg" alt="Image 4" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
            <div className="md:ml-8">
              <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Life Sciences</h2>
              <p className="text-lg text-center">Our Life Sciences course cover Biology and Chemistry at the college level, providing students with a comprehensive understaning of key concepts and principles of these disciplines. From cellular biology to organice chemistry, students explore the wonders of the natural world and develop the analytical skills needed for scientific inquiry.</p>
            </div>
          </div>
        </section>

      </div>
    </main>

    <hr />

    {/*-- Section  --*/}
    <section className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <p className="text-lg text-center">At BlueRays Online Tuition, our commitment to academic excellence is reflected in our comprehensive curriculums and expert instruction.<br /> With personalized support, engaging resources, and a focus on student success, we empower learners to achieve their full potentail and thrive in today's dynamic world.</p>
      </div>
    </section>

    {/*--  Button Section  --*/}
    <section className="container mx-auto px-4 flex flex-wrap items-center justify-center">
      <div className="flex justify-center mb-8">
        <a href="/Register" className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">Enroll Now</a>
      </div>
    </section>
  </div>
);

export default Curriculumsoffered;


