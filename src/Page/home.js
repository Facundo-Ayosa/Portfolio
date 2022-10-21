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
        <section id="about">
            <div className="center">
                <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
                <p className="no-margin">A Front End Web Developer</p>
            </div>
        </section>
        <section id="projects" className='diagonal-section'>
            <div className="diagonal-section__diagonal"></div>
            <h2>These are my last three projects I worked on</h2>
            <div className="card-container">
                {formatCards()}
            </div>
        </section>
        <section id="contact">
            <h1 className="no-margin">Let's work together</h1>
            <p className="no-margin">Care for a coffee?</p>
            <div className="contact-info">
                <div>
                    <a className="contact-card" href="https://www.linkedin.com/in/ayosafacundo/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a className="contact-card" href="https://github.com/ayosafacundo" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                        Github
                    </a>
                </div>
                <div>
                    <Link className="contact-card" to='/portfolio/about/#contactForm' onClick={scrollToTop}>
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </Link>
                    <a className="contact-card" href='https://calendly.com/ayosafacundo/personal-meeting' target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-user"></i>
                        Phone
                    </a>
                </div>
            </div>
        </section>
    </main>
}

//Amount refers to how many cards, counting from the last, this will format into JSX Component
function formatCards(amount = 3) {
    let array = data.projects.sort((a, b) => { return a.id - b.id }).slice(-amount).map((e, i) => {
        return <Card key={i} href={"/portfolio/projects/"} title={e.title} origin={e.origin} description={e.description} badges={e.badges} />;
    }).reverse();
    array.push(<Link key={amount++} to="/portfolio/projects" className="card" onClick={scrollToTop}>
        <div id="more">
            <p>See more</p>
            <i className="fa-solid fa-plus"></i>
        </div>
    </Link>)
    return array
}

export default Home;