import React from "react";
import '../styles/Sass/Card/card.css'
import {balancesheet, jsdocumentation, productlandingpage, pokedex, randomquotemachine, filler} from '../resources/images/index';
import { Link } from "react-router-dom";

const icons = {
    html: "fa-html5",
    javascript: "fa-js",
    nodejs: "fa-node-js",
    react: "fa-react",
    css: "fa-css3-alt"
}
const img = {
    balancesheet: balancesheet,
    jsdocumentation: jsdocumentation,
    productlandingpage: productlandingpage,
    pokedex: pokedex,
    randomanimequotemachine: randomquotemachine,
    filler: filler
}
function Card(props) {
    let badgelist = props.badges.map((e) => {
        return <i className={"fa-brands " + icons[e]}></i>
    });
    return <Link to={props.href} id="card">
                <div className="badges">{badgelist}</div>
                <img src={img[props.title.replace(/\s+/g, '').toLowerCase()] ? img[props.title.replace(/\s+/g, '').toLowerCase()] : img.filler} alt=""/>
                <div className="content">
                    <h3 className="project-title no-margin">{props.title}</h3>
                    <p className="origin no-margin">{props.origin}</p>
                    <p className="no-margin">{props.description}</p>
                </div>
            </Link>
}
export default Card;