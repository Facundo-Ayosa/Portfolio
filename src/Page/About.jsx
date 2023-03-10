import React from 'react';
import Portrait from '../resources/images/Portrait.webp';

function About() {

    return (
        <section id="about">
            <h2 className='title'>About Me</h2>
            <h3 className='subtitle'>Facundo Ezequiel Ayosa</h3>
            <div className='content'>
                <p className='description'>
                    Born in Buenos Aires, Argentina and fascinated with videogames and computers, I was always interested in Programming, Math and Physics. I began programming when I was 20, managed to build some small projects and developed a strong base from which I started building the knowledge I now possess.
                    <br /><br />
                    In 2022, I started diving head first into react, developing a pokédex before knowing what hooks where, and after some trial and error, ended up with a working (although not entirely optimised) proof of concept that I would later on redesign and re-develop on what the pokedex is today.
                    <br /><br />
                    In 2023, fueled by the joy of writing react code, I once again dived head first into a massive project that was designed to be a University Management WebApp, as a way to both defy myself and have something to work on. I began day by day defeating the challenges of such a giant project, never fearing the complex behaviour but following the best course of action guided by my limited knowledge and my endless will to surpass every limit.
                </p>
                <img src={Portrait} alt="Ayosa Facundo's face" />
            </div>
        </section>
    );
}

export default About;
