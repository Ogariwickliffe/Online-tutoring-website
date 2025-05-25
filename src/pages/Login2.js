import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const Login2 = () => {
  return (
    <div className="relative z-1 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Background Image */}
      <img
        src="/images/pexels-mary-taylor-5896695.jpg"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />

      {/* Form Container */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-between items-center mb-4">
          <img src="/images/Logo 3.png" alt="BlueRays Online Tuition Logo" className="h-10" />
          <div className="text-right">
            <p className="text-sm text-gray-600">IN PARTNERSHIP WITH</p>
            <img src="/images/partner-logo.png" alt="Partner Logo" className="h-8" />
          </div>
        </div>

        {/* Form Section */}
        <form>n
          {/* Email Field */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <FaUser className="text-gray-400 mr-2" />
              <input
                id="email"
                type="text"
                placeholder="Username"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            >
              Log in
            </button>
          </div>

          {/* Links Section */}
          <div className="text-center">
            <Link to="#" className="text-red-600 text-sm block mb-2">
              Having trouble logging in?
            </Link>
            <Link to="#" className="text-red-600 text-sm">
              Forgotten your username or password?
            </Link>
          </div>
        </form>

        {/* Footer Section */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Cookies must be enabled in your browser <span className="text-blue-600">ⓘ</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login2;
