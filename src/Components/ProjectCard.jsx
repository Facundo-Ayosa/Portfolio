import React from 'react';



function ProjectCard({ img = "https://picsum.photos/320/208", title, text, stage, ico, href }) {
    return (
        <div className='project-card'>
            <img src={img} alt="Pokedex preview" />
            <div className="card-body">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
                <p className={`stage ${stage}`}>{ico}{stage}</p>
                <a href={href} target="_blank" rel='noreferrer' className="link" >Watch a Preview</a>
            </div>
        </div>
    )
}

export default ProjectCard