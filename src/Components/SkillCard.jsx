import React from 'react'

function SkillCard({ children, title, description, className }) {
    return (
        <div className={className}>
            <div className='one'></div>
            <div className='two'></div>
            <div className='content'>
                {children}
                <h3>{title}</h3>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}


export default SkillCard