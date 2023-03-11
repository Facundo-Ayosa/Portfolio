import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <span className='logo'>&lt;/&gt; Ayosa Facundo</span>
            <div className='nav'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
            <div className="info">
                <ul>
                    <li className='email'>ayosafacundo@gmail.com</li>
                    <li className='phone' onClick={() => { navigator.clipboard.writeText('+54 11 6457-9559') }}>+54 11 6457-9559</li>
                    <li>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/ayosafacundo/' target="_blank" rel='noreferrer'><BsLinkedin />Linkedin</a>
                            <a href='https://github.com/ayosafacundo' target="_blank" rel='noreferrer'><BsGithub />Github</a>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer