import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const form = useRef();
    const [wasSent, setWasSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nil5un9', 'toProffessionalEmail', form.current, 'udAvyhHErC2FhjGg4')
            .then((result) => {
                console.log(result.text);
                setTimeout(() => {
                    setWasSent(true)
                }, 250);
            }, (error) => {
                alert(error.text);
            });
    };

    return (<>
        <form ref={form} onSubmit={sendEmail}>
            <label id="name">Name</label>
            <input className='input' type="text" name="user_name" required />
            <label id="email">Email</label>
            <input className='input' type="email" name="user_email" required />
            <label id="message">Message</label>
            <textarea className='input' name="message" required />
            <input id="submitbtn" type="submit" value="Send" disabled={wasSent} />
            <p className={wasSent ? 'sent' : 'hidden'}><i class="fa-solid fa-paper-plane"></i> Sent!</p>
        </form>
    </>
    );
};