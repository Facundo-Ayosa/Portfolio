import React from 'react';
import * as images from '../resources/images/index';
import ListBadges from './utility/ListBadges';
function ProjectArticle(props) {
  return (
  <article id="projectArticle">
    <img src={images[props.data.title.replace(/\s+/g, '').toLowerCase()] ? images[props.data.title.replace(/\s+/g, '').toLowerCase()] : images['filler']} alt={props.data.title + " preview image"}/>
    <div id='info-box'>
      <h2>{props.data.title}</h2>
      <h3>{props.data.origin}</h3>
      {ListBadges()}
      <p>{props.data.longDescription}</p>
    </div>
  </article>)
}

export default ProjectArticle;