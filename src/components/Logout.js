import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('moodleToken'); // Clear token
    //navigate('/login'); // Redirect to login page
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('moodleToken');
    if (token) {
      checkMoodleSession(token);
    }
  }, []);


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
        //alert('Login successful!');
        localStorage.setItem('moodleToken', data.token); // Store token for future use



        // Step 2: Use the token to fetch user details
        const userDetails = await fetchUserDetails(data.token, username);
        console.log('User Details:', userDetails);

        // Step 3: Redirect to Moodle dashboard or handle user details
        if (userDetails) {
          console.log('Welcome, ${userDetails.fullname}');
          console.log('Redirecting to:', 'http://localhost/moodle/my/');
          window.location.href = 'http://localhost/moodle/my/'; // Redirect to Moodle dashboard 
        }
        else {
          alert('Failed to fetch user details. Please try again.');
        }

      } else if (data.error) {
        // Moodle-specific error handling
        console.error('Moodle Error:', data.error, data.debuginfo);
        //alert('Login failed: ${data.error}');
      }
      else {
        alert('Login failed. Please check your credentials.');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to log in. Please try again.');
    }
  };

  const fetchUserDetails = async (token, username) => {
    try {
      console.log('Fetching user details for:', username);

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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

  const checkMoodleSession = async (token) => {
    try {
      const response = await fetch('http://localhost/moodle/webservice/rest/server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          wstoken: token,
          wsfunction: 'core_webservice_get_site_info',
          moodlewsrestformat: 'json',
        }),
      });

      const data = await response.json();

      if (data && data.errorcode) {
        // Token is invalid, log out
        console.log('Session expired or user logged out');
        localStorage.removeItem('moodleToken');
        //alert('Your session has expired. Please log in again.');
        //loginToMoodle(username, password); // Re-trigger login
      }
      else {
        // Token is valid, redirect to Moodle dashboard
        window.location.href = 'http://localhost/moodle/my/'; // Full page redirect to Moodle dashboard
      }

    } catch (error) {
      console.error('Error checking Moodle session:', error);
      localStorage.removeItem('moodleToken'); // Clear token on error
      //window.location.href = '/login'; // Redirect to React login page
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission reload
    console.log('Username:', username);
    console.log('Password:', password); // Debugging
    loginToMoodle(username, password);
  };