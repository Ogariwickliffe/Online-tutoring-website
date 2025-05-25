import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Careers from './pages/Careers';
import Homepage from './pages/Homepage';
import OurApproach from './pages/OurApproach';
import Curriculumsoffered from './pages/CurriculumsOffered';
import OurHistory from './pages/OurHistory';
import OurTeam from './pages/OurTeam';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import TermsofUse from './pages/TermsofUse';
//import Logout from './components/Logout'; // Path to your Logout component
//import './Homepage2.css';

function App() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = ['/Login', '/Register'];

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/OurApproach" element={<OurApproach />} />
        <Route path="/Curriculumsoffered" element={<Curriculumsoffered />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/OurHistory" element={<OurHistory />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/TermsofUse" element={<TermsofUse />} />
        <Route path="/Register" element={<Register />} />
        {/*<Route path="/Logout" element={<Logout />} />*/}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
