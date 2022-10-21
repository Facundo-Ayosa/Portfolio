import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/style.css';
import Home from './Page/home';
import Portfolio from './Page/portfolio';
import Education from './Page/education';
import AboutMe from './Page/aboutme';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <ul>
          <li className="nav-link"><Link to="/portfolio">Home</Link></li>
          <li className="nav-link"><Link to="/portfolio/projects">Portfolio</Link></li>
          <li className="nav-link"><Link to="/portfolio/education">Education</Link></li>
          <li className="nav-link"><Link to="/portfolio/about">Contact</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/education" element={<Education />} />
        <Route path="/portfolio/projects" element={<Portfolio />} />
        <Route path="/portfolio/about" element={<AboutMe />} />
      </Routes>
    </Router>
    <footer>
      <p>Made by Ayosa Facundo Ezequiel</p>
    </footer>
  </React.StrictMode>
);
//<Route path="/blog" element={<Blog/>}/>