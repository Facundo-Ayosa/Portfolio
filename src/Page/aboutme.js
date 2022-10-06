import React, { useState } from 'react'
import { ContactMe as ContactForm } from '../Components/contactMe';
function AboutMe() {
    const [isActive, setActive] = useState(false);
    const clickHandler = () => {
        setActive(!isActive)
    }
    let src = "https://media-exp1.licdn.com/dms/image/C4D03AQFzrw_lWjF42w/profile-displayphoto-shrink_800_800/0/1655758999411?e=1669852800&v=beta&t=HVG_Z_jOm-UsLT6QW1guz1ojheD4eH2_ygSNAkOBw40";
    return (
        <main>
            <section id='aboutme'>
                <div className='content-box'>
                    <img src={src} alt='Facundo Ayosa' />
                    <div className='box'>
                        <h1>Facundo Ezequiel Ayosa</h1>
                        <h3>Self-Taught Frontend Web Developer</h3>
                        <h4>Profficiencies & Hard Skills</h4>
                        <ul className='father-list'>
                            <li className={isActive ? "clicked" : null}><div onClick={clickHandler}><i className={isActive ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> GitHub</div></li>
                            <ul className={isActive ? "active" : "collapsed"}>
                                <li><a href='https://github.com/ayosafacundo' className='linkBtn' target="_blank" rel="noreferrer"><i className='fa-brands fa-github'></i> Go to Github</a></li>
                            </ul>
                            <li>Git</li>
                            <Collapsibleul key="1" father="FrameWorks" childs={["React.js", "Node.js"]} />
                            <Collapsibleul key="2" father="Javascript" childs={["ES6+", "Object Oriented Programming", "Data Structures", "JQuery", "DOM Manipulation", "API REST"]} />
                            <Collapsibleul key="3" father="HTML" childs={["HTML5", "Semantic HTML", "Responsive Design"]} />
                            <Collapsibleul key="4" father="CSS" childs={["CSS3", "Flexbox", "Grid", "Animations"]} />
                        </ul>
                    </div>
                </div>
            </section>
            <section id="contactForm">
                <div className='content-box'>
                    <h2>Contact Me</h2>
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}

function Collapsibleul(props) {
    const [isActive, setActive] = useState(false);
    const clickHandler = () => {
        setActive(!isActive)
    }
    return (<>
        <li className={isActive ? "clicked" : null}><div onClick={clickHandler}><i className={isActive ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> {props.father}</div></li>
        <ul className={isActive ? "active" : "collapsed"}>
            {props.childs.map(e => <li>{e}</li>)}
        </ul></>
    )
}
export default AboutMe