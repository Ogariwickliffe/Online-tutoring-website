import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 py-2 rounded-lg shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/Logo 3.png" alt="Logo" className="h-auto w-20" />
          <span className="text-lg font-semibold">
            <Link to="/">BlueRays Online Tuition</Link>
          </span>
        </div>
        <nav className="space-x-4 hidden md:flex">
          {currentPath !== "/" && (
            <Link to="/" className="hover:text-red-700">Home</Link>
          )}
          {currentPath !== "/OurApproach" && (
            <Link to="/OurApproach" className="hover:text-red-700">Our Approach</Link>
          )}
          {currentPath !== "/CurriculumsOffered" && (
            <Link to="/CurriculumsOffered" className="hover:text-red-700">Curriculums Offered</Link>
          )}
          {currentPath !== "/OurTeam" && (
            <Link to="/OurTeam" className="hover:text-red-700">Our Team</Link>
          )}
          {currentPath !== "/OurHistory" && (
            <Link to="/OurHistory" className="hover:text-red-700">Our History</Link>
          )}
          {currentPath !== "/Careers" && (
            <Link to="/Careers" className="hover:text-red-700">Careers</Link>
          )}
          {currentPath !== "/Login" && (
            <Link to="/Login" className="bg-red-800 px-3 py-1 rounded-lg hover:bg-red-700">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

