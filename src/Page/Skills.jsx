import React from 'react';
import getSkills from '../Components/utils/SkillCards.js';

function Skills() {


    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className='container'>
                {getSkills(8)}
            </div>
        </section>
    );
}

export default Skills;
