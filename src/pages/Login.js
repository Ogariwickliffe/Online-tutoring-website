import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'; // Keep this import from react-router-dom
import PasswordToggle from './PasswordToggle';
import AtomAnimation from '../components/AtomAnimation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  //useEffect(() => {
    // Clear localStorage token when redirected to login page
    //localStorage.removeItem('moodleToken');
  //}, []);

  const loginToMoodle = async (username, password) => {
    try {
      // Step 1: Request login token
      const response = await fetch('http://localhost/moodle/login/token.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          username: username,
          password: password, // No need for encodeURIComponent here
          service: 'moodle_login_app', // Replace with your Moodle service name
        }),
      });

      const data = await response.json();

      if (data.token) {
        // Login successful
        alert('Login successful!');
        localStorage.setItem('moodleToken', data.token); // Store token for future use

        // Step 2: Use the token to fetch user details
        const userDetails = await fetchUserDetails(data.token, username);
        console.log('User Details:', userDetails);

        // Step 3: Redirect to Moodle dashboard or handle user details
        if (userDetails) {
          //alert(Welcome, ${ userDetails.fullname }!);
          window.location.href = 'http://localhost/moodle/my/'; // Redirect to Moodle dashboard
        } else {
          alert('Failed to fetch user details. Please try again.');
        }
      } else if (data.error) {
        // Moodle-specific error handling
        console.error('Moodle Error:', data.error, data.debuginfo);
        //alert(Login failed: ${ data.error });
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to log in. Please try again.');
    }
  };

  const fetchUserDetails = async (token, username) => {
    try {
      const response = await fetch('http://localhost/moodle/webservice/rest/server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          wstoken: token,
          wsfunction: 'core_user_get_users_by_field',
          field: 'username',
          'values[]': username, // Use array notation for 'values'
          moodlewsrestformat: 'json',
        }),
      });

      const data = await response.json();
      console.log('API Response:', data); // Log the response

      if (data && data.length > 0) {
        return data[0]; // Return the first matching user
      } else {
        console.error('No user data returned:', data);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission reload
    console.log('Username:', username);
    console.log('Password:', password); // Debugging
    loginToMoodle(username, password);
  };

  return (
    <div className="font-comfortaa antialiased text-grey-900 relative z-1 min-h-screen bg-gray-100">
      <AtomAnimation />

      {/* Background Image */}
      <img
        src="/images/pexels-mary-taylor-5896695.jpg"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />

      {/* Form Container */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="login-container relative z-20 w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-10 p-8 rounded shadow-lg">
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

          {/* Login Form */}
          <h2 className="text-2xl text-center text-red-800 font-bold mb-4">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                id="identifier"
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <PasswordToggle password={password}
              onChange={(e) => setPassword(e.target.value)} />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>

            <p className="text-center mt-4 font-bold text-red-800">
              <Link to="#">Forgot Password?</Link>
            </p>
            <p className="text-center mt-4 font-bold">
              Don't have an account?{" "}
              <Link to="/Register" className="text-red-800">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
