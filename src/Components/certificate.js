import React, { useState } from 'react';
import * as certificates from '../resources/certificates';
import { filler } from '../resources/images';
function Certificate(data, i) {
    const [isActive, setActive] = useState(false);
    let e = data.data;
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (<article className="accordion">
        <div className="accordion__button" onClick={handleToggle}>{e.title} <i className={isActive ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></div>
        <div className={isActive ? 'accordion__content-active' : 'accordion__content'}>
            <a href={e.href} target="_blank" rel="noreferrer"><img src={certificates[e.title.replace(/\s+/g, "").toLowerCase()] ? certificates[e.title.replace(/\s+/g, "").toLowerCase()] : filler} alt={e.title} /></a>
            <div className='text'>
                <h3>Certificate From {e.school}</h3>
                <p className='date'>Started in {e.startDate} <br /> Finished in {e.endDate}</p>
                <p>{e.description}</p>
                <ul>
                    {e.profficiencies.map(e => {
                        return <li>{e}</li>;
                    })}
                </ul>
            </div>
        </div>
    </article>);
}

export default Certificate