import React from 'react';

const Careers = () => (
    <div className="font-comfortaa antialiased text-grey-900">
       
        {/* Section 1 */}
     <section className="container mx-auto px-4 py-28 justify-center flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl text-center text-red-800 font-bold mb-4">Join Our Team</h2>
        </div>
     </section>

     <hr/>
 
     {/* Section 2 */}
     <section className="container mx-auto px-4 py-16 justify-center flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-center">BlueRays Online Tuition seeks tutors who exhibit expertise in their subjects of specialization, a passion for teaching, and effective communication skills, along with adaptability, patience,and empathy. Strong interpersonal and organizational skills, coupled with tech-savviness. A commitment to student success and continuous professional development rounds out the qualities sought, ensuring BlueRays Online Tuition delivers high-quality instruction and support to its students.</p>
        </div>
     </section>

     <hr/>

      {/* Section 3 */}
     <section className="container mx-auto px-4 py-16 justify-center flex flex-wrap items-center">
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <p class="text-lg text-center">Does this description fit you?<br/> Email us your resume and cover letter at <br/><a href="mailto:blueraysonlinetuition@gmail.com" className="hover:text-red-800 underline">blueraysonlinetuition@gmail.com</a> </p>
        </div>
     </section>
   
     <hr/>

    </div>
);

export default Careers;
