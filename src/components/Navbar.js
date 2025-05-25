import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  // Define the pages where navbar should not be displayed
  const isAuthPage = currentPath === '/Login' || currentPath === '/Register';

  if (isAuthPage) {
    return null; // Don't render navbar on login or register page
  }

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 py-2 rounded-lg shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/images/Logo 3.png" alt="Logo" className="h-auto w-16 md:w-20" />
          <span className="text-sm md:text-lg font-semibold">
            <Link to="/">BlueRays Online Tuition</Link>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4">
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

        {/* Hamburger Menu Icon */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800 text-white py-2 w-1/2 max-w-xs rounded-l-lg shadow-lg absolute right-0 transition-transform transform duration-300 ease-in-out">
          <div className="container mx-auto px-4 space-y-2">
            {currentPath !== "/" && (
              <Link
                to="/"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
            {currentPath !== "/OurApproach" && (
              <Link
                to="/OurApproach"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </Link>
            )}
            {currentPath !== "/CurriculumsOffered" && (
              <Link
                to="/CurriculumsOffered"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Curriculums Offered
              </Link>
            )}
            {currentPath !== "/OurTeam" && (
              <Link
                to="/OurTeam"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
            )}
            {currentPath !== "/OurHistory" && (
              <Link
                to="/OurHistory"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Our History
              </Link>
            )}
            {currentPath !== "/Careers" && (
              <Link
                to="/Careers"
                className="block hover:text-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            )}
            {currentPath !== "/Login" && (
              <Link
                to="/Login"
                className="block bg-red-800 px-3 py-1 rounded-lg hover:bg-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

