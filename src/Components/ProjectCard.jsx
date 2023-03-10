import React from 'react'
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import pokedeximg from '../resources/images/Pokedex.png';


function ProjectCard({ img, title, text, stage, ico, href }) {
    return (
        <div className='project-card'>
            <img src={pokedeximg} alt="Pokedex preview" />
            <div className="card-body">
                <h4 className="title">Claymore University Management App</h4>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p><span className="stage working"><BsWrenchAdjustableCircle />working</span></p >
                <a href="#" className="link" > Watch a Preview</a >
            </div >
        </div >
    )
}

export default ProjectCard