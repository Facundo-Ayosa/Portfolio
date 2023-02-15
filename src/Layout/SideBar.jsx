import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    const [navActive, setNavActive] = useState('Home')



    return (
        <header>
            <nav>
                <Link to='/portfolio' data-isactive={navActive === 'Home' ? "active" : undefined}>Home</Link>
            </nav>
        </header>
    )
}

export default SideBar