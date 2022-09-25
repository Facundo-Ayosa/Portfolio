import React from 'react'
import data from '../resources/database.json';

export default function projectarticle() {
  let articlebundle = [];
  console.log(data);
  data.projects
    .sort((a, b) => { b.id - a.id })
    .map((e)=>{
        
    });
  return (
    <article>
        <img src='' alt=''/>

    </article>
  )
}
