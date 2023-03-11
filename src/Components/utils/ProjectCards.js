import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import ProjectCard from '../ProjectCard';
import data from '../../resources/database.json';
import React from 'react';
import Pokedex from '../../resources/images/Pokedex.webp';
import QuoteMachine from '../../resources/images/QuoteMachine.webp';
import ClaymoreManagementApp from '../../resources/images/ClaymoreManagementApp.webp';

const icons = {
    working: <BsWrenchAdjustableCircle />,
    completed: <IoCheckmarkDoneCircleSharp />
}

const images = {
    Pokedex: Pokedex,
    QuoteMachine: QuoteMachine,
    ClaymoreManagementApp: ClaymoreManagementApp
}

/**
 * Gets an amount and returns that amount in formatted project cards. if called without specifying an amount, will return every project instead
 * @param {int} amount 
 * @returns {[React.Component]}
 */
const getProjects = (amount = 0) => {
    const components = [];

    if (amount === 0) {
        amount = data.projects.length
    }

    for (let i = 0; i < amount; i++) {
        components.push(<ProjectCard key={i} img={images[data.projects[i].img]} title={data.projects[i].title} text={data.projects[i].description} stage={data.projects[i].stage} ico={icons[data.projects[i].stage]} href={data.projects[i].href} />)
    }
    return components;
}
export default getProjects;