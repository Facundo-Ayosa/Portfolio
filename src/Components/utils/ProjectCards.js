import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import ProjectCard from '../ProjectCard';
import data from '../../resources/database.json';
import React from 'react';


let icons = {
    BsWrenchAdjustableCircle: <BsWrenchAdjustableCircle />,
    GrStatusGood: <GrStatusGood />
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
        components.push(<ProjectCard />)
    }

    return components;

}
export default getProjects;