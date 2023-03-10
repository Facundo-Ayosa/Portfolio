import React from 'react'
import { useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
function Header() {
    const [navActive, setNavActive] = useState('About')


    return (
        <header>
            <span className='logo'>&lt;/&gt; Ayosa Facundo</span>
            <nav>
                <a className={navActive === "About" ? "active" : undefined}
                    href='#home'
                    data-start="<" data-end=">"
                    onClick={() => setNavActive("About")}>About</a>
                <a className={navActive === "Portfolio" ? "active" : undefined}
                    href='#portfolio'
                    data-start="<" data-end=">"
                    onClick={() => setNavActive("Portfolio")}>Portfolio</a>
                <a className={navActive === "Contact" ? "active" : undefined}
                    href='#contact'
                    data-start="<" data-end=">"
                    onClick={() => setNavActive("Contact")}>Contact Me</a>
            </nav>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/ayosafacundo/'><BsLinkedin />Linkedin</a>
                <a href='https://github.com/ayosafacundo'><BsGithub />Github</a>
            </div>
        </header>
    )
}

export default Header