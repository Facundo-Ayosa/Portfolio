import { SiReact, SiJavascript, SiHtml5, SiCss3, SiSass, SiRedux, SiFigma, SiGithub } from 'react-icons/si';
import SkillCard from '../SkillCard';
import skills from '../../resources/skills.json';
import React from 'react';


const icons = {
    SiReact: <SiReact />,
    SiJavascript: <SiJavascript />,
    SiHtml5: <SiHtml5 />,
    SiCss3: <SiCss3 />,
    SiSass: <SiSass />,
    SiRedux: <SiRedux />,
    SiFigma: <SiFigma />,
    SiGithub: <SiGithub />
}


/**
 * Gets an amount and returns that amount in formatted SkillCards
 * @param {int} amount 
 * @returns {[React.Component]}
 */
const getSkills = (amount = 8) => {

    const skillcards = []
    for (let i = 0; i < amount; i++) {
        let icon = icons[skills[i].icon];
        skillcards.push(<SkillCard key={i} className={`card-${i + 1} card`} icon={icon} title={skills[i].title} description={skills[i].description}>{icon}</SkillCard>);
    }
    return skillcards;
}

export default getSkills;