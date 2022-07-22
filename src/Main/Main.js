import React from 'react';
import './Main.css';
import Card from '../Cards/Cards.js';

function Main() {
    return <main><section id="about">
                <div className="center">
                    <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
                    <p className="no-margin">A Front End Web Developer</p>
                </div>
                </section>
                <section id="projects">
                    <h2 className="no-margin">These are some of my projects</h2>
                    <div id="card-container">
                        <Card title="Balance Sheet" origin="Part of the FreeCodeCamp Course." description="Focused on Semantic HTML & Table management, with little CSS." badges={["css", "htmltable"]}/>
                        <Card title="JS Documentation" origin="Part of the FreeCodeCamp Course." description="Focused on Semantic HTML & CSS Optimization." badges={["css", "html"]}/>
                        <Card title="Product Landing Page" origin="Part of the FreeCodeCamp Course." description="Focused on Responsiveness & Semantic HTML." badges={["css", "html"]}/>
                    </div>
                </section>
                <section id="contact">
                <h1 className="no-margin">Let's work together</h1>
                <p className="no-margin">Care for a coffee?</p>
                    <div className="contact-info">
                        <a className="contact-card" href="https://www.linkedin.com/in/ayosafacundo/" target="_blank">
                            <img className="invert" src="resources/icons/linkedin.svg" alt="LinkedIn icon"/>
                            LinkedIn
                        </a>
                        <a className="contact-card" href="https://github.com/Facundo-Ayosa" target="_blank">
                            <img className="invert" src="resources/icons/github.svg" alt="Github icon"/>
                            Github
                        </a>
                        <a className="contact-card">
                            <img className="invert" src="resources/icons/email.svg" alt="Email icon"/>
                            Email
                        </a>
                        <a className="contact-card">
                            <img className="invert" src="resources/icons/contact.svg" alt="Contact icon"/>
                            Phone
                        </a>
                    </div>
                </section>
            </main>
}
export default Main;