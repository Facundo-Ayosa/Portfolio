import React from "react";
import './Card.css'



function Card(props) {
    const badge = {
        html: "resources/icons/html.svg",
        css: "resources/icons/css.svg",
        htmltable: "resources/icons/html-table.svg"
    }
    const portfolio = {
        balancesheet: "/resources/images/balancesheet.png",
        jsdocumentation: "/resources/images/jsdocumentation.png",
        productlandingpage: "/resources/images/productlandingpage.png"
    }
    let badgelist = props.badges.map((src) => {
        return <img src={badge[src]} className="badge"/>
    });
    return <a href="#" id="card">
                <div className="badges invert">{badgelist}</div>
                <img src={portfolio[props.title.replace(/\s+/g, '').toLowerCase()]} alt=""/>
                <div className="content">
                    <h3 className="project-title no-margin">{props.title}</h3>
                    <p className="origin no-margin">{props.origin}</p>
                    <p className="no-margin">{props.description}</p>
                </div>
            </a>
}

export default Card;