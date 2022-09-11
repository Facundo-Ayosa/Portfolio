import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/navbar.css';
import Main from './modules/home/main';
import Blog from './modules/blog/blog';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <header>
          <ul>
            <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-link"><Link to="/portfolio">Portfolio</Link></li>
            <li className="nav-link"><Link to="/blog">Blog</Link></li>
            <li className="nav-link"><Link to="/contact">Contact</Link></li>
          </ul>
      </header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);