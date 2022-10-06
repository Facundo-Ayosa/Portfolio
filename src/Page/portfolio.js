import React from 'react';
import data from '../resources/database.json';
import ProjectArticle from '../Components/projectarticle';
function portfolio() {
  return (
    <main id="portfolioPage">
      <section>
        {formatProjects()}
      </section>
    </main>
  )
}

function formatProjects() {
  let array = data.projects.sort((a, b) => { return b.id - a.id });
  return array.map((e, i) => {
    return <ProjectArticle data={e} key={i} />
  });
}

export default portfolio