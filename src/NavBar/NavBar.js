import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <header>
        <nav>
          <ul>
            <li className="nav-link"><a href="#about">About</a></li>
            <li className="nav-link"><a href="#projects">Blog</a></li>
            <li className="nav-link"><a href="#projects">Portfolio</a></li>
            <li className="nav-link"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default NavBar;
