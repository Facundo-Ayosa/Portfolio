import React from 'react';
import WebDev from '../resources/images/Software-Developer.svg';

function Home() {
    const handleClick = () => {
        console.log("Clicked!")
    }
    return (
        <section id="home">
            <img src={WebDev} alt="Web Developer Illustration" />
            <h1 className='title'><span className='whiteText'>Hey!</span> I am a <br /> <span className='rainbow_anim'>Front End Web Developer</span></h1>
            <div className='btns'>
                <button onClick={handleClick} className="contact">Contact Me</button>
                <button onClick={handleClick} className="projects">Projects</button>
            </div>
        </section>
    )
}

export default Home;