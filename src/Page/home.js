import React from 'react';
import Card from "../Components/cards.js";
import data from '../resources/database.json';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
function Home() {
    return <main id="mainPage">
                <section id="about" className='full-size'>
                    <div className="center">
                        <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
                        <p className="no-margin">A Front End Web Developer</p>
                    </div>
                </section>
                <section id="projects" className='full-size'>
                    <h2>These are my last three projects I worked on</h2>
                    <div id="card-container">
                        <Link to="/portfolio/projects" id="card" onClick={scrollToTop}>
                            <div id="more">
                                <p>See more</p>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        {formatCards()}
                    </div>
                </section>
                <section id="contact" className='full-size'>
                    <h1 className="no-margin">Let's work together</h1>
                    <p className="no-margin">Care for a coffee?</p>
                        <div className="contact-info">
                            <div>
                            <a className="contact-card" href="https://www.linkedin.com/in/ayosafacundo/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin"></i>
                                LinkedIn
                            </a>
                            <a className="contact-card" href="https://github.com/ayosafacundo" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github"></i>
                                Github
                            </a>
                            </div>
                            <div>
                            <a className="contact-card" href='#'>
                                <i class="fa-solid fa-envelope"></i>
                                Email
                            </a>
                            <a className="contact-card" href='https://calendly.com/ayosafacundo/video-conference' target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-user"></i>
                                Phone
                            </a>
                            </div>
                        </div>
                    </section>
            </main>
}

//Amount refers to how many cards, counting from the last, this will format into JSX Component
function formatCards(amount = 3){
    let array = data.projects.sort((a, b) => { return a.id - b.id }).slice(-amount).map((e, i) => {
        return <Card key={i} href={'/portfolio/'+e.title.replace(/\s+/g, '').toLowerCase()} title={e.title} origin={e.origin} description={e.description} badges={e.badges} />;
    });
    return array
}

export default Home;