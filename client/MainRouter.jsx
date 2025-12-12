import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './src/home';
import About from './src/about';
import Projects from './src/project';
import Education from './src/education';
import Services from './src/services';
import Contact from './src/contact';
import './src/App.css';   // global styling for nav/layout

// Main Router Component
// Defines navigation structure and page routes for the entire portfolio site.
// Also includes the custom logo and navigation bar.

const MainRouter = () => {
  return (
    <>
      {/* Top navigation bar with logo */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-shape">FM</div>
          <span className="logo-text">Francesca Mpolomena</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Main content for each page */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default MainRouter;


