import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/style.css';
import Home from './Page/Home';
import Header from './Layout/Header';
import Main from './Main';
import About from './Page/About';
import Skills from './Page/Skills';
import Portfolio from './Page/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main>
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </Main>
  </React.StrictMode>
);
//<Route path="/blog" element={<Blog/>}/>