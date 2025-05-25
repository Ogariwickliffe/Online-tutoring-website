import React from 'react';

const OurTeam = () => {
    return (
        <div className="flex flex-col items-center py-28 bg-gray-200">
            <h1 className="text-2xl mb-10 font-bold">Our Team</h1>
            <div className="flex flex-col items-center org-chart">
                <div className="flex justify-center mb-5 level-1">
                    <div className="text-center mx-4 person">
                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        </div>
                        <h3 className="my-2 text-lg font-bold">Managing Director</h3>
                    </div>
                    {/* Add more persons */}
                </div>
                {/* Add levels 2 and 3 similarly */}
                <div className="container justify-center flex flex-wrap items-center mx-auto px-4 py-4">
                  <div className="flex text-center space-x-16 mx-4 person">
                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        <h3 className="my-2 text-lg font-bold">Curriculum Director</h3></div>

                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        <h3 className="my-2 text-lg font-bold">Head of Admimissions</h3></div>

                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        <h3 className="my-2 text-lg font-bold">Chief Finance Officer</h3></div>

                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        <h3 className="my-2 text-lg font-bold">Careers Advising Director</h3></div>

                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" />
                        <h3 className="my-2 text-lg font-bold">Head of Marketing<br/>&<br/>Public Relations</h3></div>

                        <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-400 avatar">
                            <img src="path_to_image" alt="Avatar" className="w-full h-full rounded-full" /> 
                        <h3 className="my-2 text-lg font-bold">Systems Security<br/>&<br/>Maintenance Officer</h3></div>
                  </div>
               </div>
              
          </div>
        </div>
    );
};

export default OurTeam;
