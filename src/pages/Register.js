import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordToggle from './PasswordToggle';
import MyComponent from './MyComponent';
import AtomAnimation from '../components/AtomAnimation';

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswords(e.target.value, confirmPassword);
    validatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswords(password, e.target.value);
  };

  const checkPasswords = (pass, confirmPass) => {
    setPasswordMatch(pass === confirmPass);
  };

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain a number, and have a special character'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatch && password && !passwordError) {
      console.log('Passwords match. Form submitted!');
    } else {
      console.log('Passwords do not match.');
    }
  };

  return (
    <div className="font-comfortaa antialiased text-grey-900 relative z-1 min-h-screen bg-gray-100">
      <AtomAnimation />
      
      {/* Background Image */}
      <img
        src="/images/lucas-law-ecELcxmJTk4-unsplash.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      
      {/* Form Container */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="registration-container relative z-20 w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-10 p-8 rounded shadow-lg">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/images/Logo 3.png"
              alt="BlueRays Online Tuition Logo"
              className="w-20 h-20 mb-2"
            />
            <h1 className="text-xl font-bold text-red-800 text-center">
              BlueRays Online Tuition
            </h1>
          </div>

          {/* Registration Form */}
          <h2 className="text-2xl text-center text-red-800 font-bold mb-4">
            Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                name="firstname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <PasswordToggle onChange={handlePasswordChange} />

            <div className="mb-4">
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {!passwordMatch && <p className="text-red-600 text-sm">Passwords do not match</p>}
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}

            <MyComponent />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-4 font-bold">
              Already have an account?{' '}
              <Link to="/Login" className="text-red-800">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
