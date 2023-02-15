import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/style.css';
import Home from './Page/home';/*
import Portfolio from './Page/portfolio';
import Education from './Page/education';
import AboutMe from './Page/aboutme';*/
import SideBar from './Layout/SideBar';
import Footer from './Layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <SideBar />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
//<Route path="/blog" element={<Blog/>}/>