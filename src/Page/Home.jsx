import React from 'react';
import WebDev from '../resources/images/Software-Developer.svg';

function Home() {
    const handleClick = () => {

    }
    return (
        <section id="home">
            <img src={WebDev} alt="Web Developer Illustration" />
            <h1 className='title'><span className='whiteText'>Hey!</span> I am a <br /> <span className='rainbow_anim'>Front End Web Developer</span></h1>
            <div className='btns'>
                <a href='#contact' className="button contact">Contact Me</a>
                <a href='#portfolio' className="button projects">Projects</a>
            </div>
        </section>
    )
}

export default Home;