import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactme from '../resources/images/Contact-me.svg';
import { SlInfo } from 'react-icons/sl';
import { SiWhatsapp, SiTelegram, SiTwitter, SiDiscord, SiLinkedin } from 'react-icons/si';

function Contact() {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState("Waiting");

    const sendEmail = (e) => {
        e.preventDefault();
        let formFilled = false;
        if (form.current[0].value !== "" && form.current[1].value !== "" && form.current[2].value !== "") {
            formFilled = true
        }
        if (formFilled) {
            emailjs.sendForm('service_nil5un9', 'toProffessionalEmail', form.current, 'udAvyhHErC2FhjGg4')
                .then((result) => {
                    setEmailStatus("Sent");
                }, (error) => {
                    setEmailStatus("Error");
                });
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="container">
                <img src={contactme} alt="Contact Me Illustration" />
                <div className='form'>
                    <h3>You can contact me in any of these apps:</h3>
                    <div className="apps">
                        <a href="https://wa.me/qr/46XAB7FLGH2VM1" target="_blank" rel='noreferrer'><SiWhatsapp /></a>
                        <a href="https://t.me/AyosaFacundo" target="_blank" rel='noreferrer'><SiTelegram /></a>
                        <a href="https://twitter.com/FacundoAyosa" target="_blank" rel='noreferrer'><SiTwitter /></a>
                        <a href="https://discord.com/users/296442278854262784" target="_blank" rel='noreferrer'><SiDiscord /></a>
                        <a href="https://www.linkedin.com/in/ayosafacundo/" target="_blank" rel='noreferrer'><SiLinkedin /></a>
                    </div>
                    <h3>Or leave here your details and I will contact you.</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        { /* Name */}
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        { /* Email */}
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        { /* Details / text */}
                        <div className="details">
                            <label htmlFor="message">Details</label>
                            <textarea className='input' type="textarea" name="message" id="details" />
                        </div>
                        <div className="submit">
                            {emailStatus === "Error" && <span><SlInfo /> There was an unexpected error, please try again</span>}
                            <button type="submit" value="Send" onClick={sendEmail} className={emailStatus === "Sent" ? "sent" : emailStatus === "Error" ? "error" : undefined}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact