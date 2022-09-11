import React from 'react';
import '../../styles/home/main.css';
import Projects from './projects';

function Main() {
    return <main>
                <section id="about">
                    <div className="center">
                        <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
                        <p className="no-margin">A Front End Web Developer</p>
                    </div>
                </section>
                <Projects />
                <section id="contact">
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
                            <a className="contact-card">
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
export default Main;