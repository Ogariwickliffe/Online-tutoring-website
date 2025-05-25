import React from 'react';

const ContactUs = () => (
    <div className="font-comfortaa antialiased text-grey-900">
        {/* Contact Us Form */}
        <div className="relative z-1 flex flex-col justify-center items-center">
            <img src="/images/nick-morrison-FHnnjk1Yj7Y-unsplash (1).jpg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover z-0 bg-opacity-0.5" />
            <div className="flex items-center justify-center h-screen">
                <div className="Registration-container max-w-md w-full">
                    <h2 className="text-2xl text-center text-red-800 font-bold mb-4 relative">Contact Us</h2>
                    <form>
                        <div className="mb-4 relative">
                            <input id="name" type="text" placeholder="Name" name="firstname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4 relative">
                            <input id="email" type="email" placeholder="Email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4 relative">
                            <input id="subject" type="text" placeholder="Subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4 relative">
                            <textarea id="Message" type="text" placeholder="Message/Inqury" rows="5" className="shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required ></textarea>
                        </div>

                        <div className="flex items-center justify-center relative">
                            <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
);

export default ContactUs;
