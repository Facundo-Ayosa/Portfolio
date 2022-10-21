import React from "react";
import * as img from '../resources/images/index';
import { Link } from "react-router-dom";
import ListBadges from './utility/ListBadges';
function Card(props) {
    return (<Link to={props.href ? props.href : "/portfolio/projects"} className="card" id={props.title}>
        <img src={img[props.title.replace(/\s+/g, '').toLowerCase()] ? img[props.title.replace(/\s+/g, '').toLowerCase()] : img.filler} alt="" />
        {ListBadges(props.badges)}
        <div className="content">
            <h3 className="project-title no-margin">{props.title}</h3>
            <p className="origin no-margin">{props.origin}</p>
            <p className="description">{props.description}</p>
        </div>
    </Link>)
}
export default Card;