import React from 'react'
import contactme from '../resources/images/Contact-me.svg';
import { SiWhatsapp, SiTelegram, SiTwitter, SiDiscord, SiLinkedin } from 'react-icons/si'

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="container">
                <img src={contactme} alt="Contact Me Illustration" />
                <div className='form'>
                    <h3>You can contact me in any of these apps:</h3>
                    <div className="apps">
                        <SiWhatsapp />
                        <SiTelegram />
                        <SiTwitter />
                        <SiDiscord />
                        <SiLinkedin />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact