import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <ul>
                <li className="nav-link"><Link to="/portfolio">Home</Link></li>
                <li className="nav-link"><Link to="/portfolio/projects">Portfolio</Link></li>
                <li className="nav-link"><Link to="/portfolio/education">Education</Link></li>
                <li className="nav-link"><Link to="/portfolio/about">Contact</Link></li>
            </ul>
        </header>
    )
}

export default NavBar