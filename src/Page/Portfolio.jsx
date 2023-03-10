import React from 'react';
import getProjects from '../Components/utils/ProjectCards';

function Portfolio() {



  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className='container'>
        {getProjects()}
      </div>
    </section>
  )
}
export default Portfolio