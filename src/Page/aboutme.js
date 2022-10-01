import React, { useState } from 'react'

function AboutMe() {
    let src = "https://media-exp1.licdn.com/dms/image/C4D03AQFzrw_lWjF42w/profile-displayphoto-shrink_800_800/0/1655758999411?e=1669852800&v=beta&t=HVG_Z_jOm-UsLT6QW1guz1ojheD4eH2_ygSNAkOBw40";
    return (
        <main>
            <section id='aboutme'>
                <div className='content-box'>
                    <img src={src} alt='Facundo Ayosa' />
                    <div className='box'>
                        <h1>Facundo Ezequiel Ayosa</h1>
                        <div class="ribbon">
                            <div class="ribbon__side ribbon__side--l"></div>
                            <div class="ribbon__triangle ribbon__triangle--l"></div>
                            <div class="ribbon__triangle ribbon__triangle--r"></div>
                            <div class="ribbon__side ribbon__side--r"></div>
                            <div class="ribbon__content">
                                <h3>Self-Taught Frontend Web Developer</h3>
                            </div>
                        </div>
                        <h4>Profficiencies & Hard Skills</h4>
                        <ul className='father-list'>
                            <li>Github</li>
                            <li>Git</li>
                            <Collapsibleul father="FrameWorks" childs={["React.js", "Node.js"]} />
                            <Collapsibleul father="Javascript" childs={["ES6+", "Object Oriented Programming", "Data Structures", "JQuery", "DOM Manipulation", "API REST"]} />
                            <Collapsibleul father="HTML" childs={["HTML5", "Semantic HTML", "Responsive Design"]} />
                            <Collapsibleul father="CSS" childs={["CSS3", "Flexbox", "Grid", "Animations"]} />
                        </ul>
                    </div>
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