import React from "react";
import './Card.css'
import {html, htmltable, javascript, linkedin, react, css} from '../resources/icons/index';
import {balancesheet, jsdocumentation, productlandingpage, pokedex} from '../resources/images/index';

const icons = {
    html: html,
    htmltable: htmltable,
    javascript: javascript,
    linkedin: linkedin,
    react: react,
    css: css
}
const img = {
    balancesheet: balancesheet,
    jsdocumentation: jsdocumentation,
    productlandingpage: productlandingpage,
    pokedex: pokedex
}

function Card(props) {
    let badgelist = props.badges.map((e) => {
        return <img src={icons[e]} className="badge"/>
    });
    return <a href={props.href} id="card" target="_blank" rel="noreferrer">
                <div className="badges invert">{badgelist}</div>
                <img src={img[props.title.replace(/\s+/g, '').toLowerCase()]} alt=""/>
                <div className="content">
                    <h3 className="project-title no-margin">{props.title}</h3>
                    <p className="origin no-margin">{props.origin}</p>
                    <p className="no-margin">{props.description}</p>
                </div>
            </a>
}

export default Card;