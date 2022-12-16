import React, {useRef, useState} from 'react';
import {MdOutlineEmail} from "react-icons/md";
import {AiOutlineLinkedin, AiOutlineWhatsApp} from "react-icons/ai";
import emailjs from '@emailjs/browser';
import Success from "./messages/Success";
import Loading from "./messages/Loading";
import Failed from "./messages/Failed";



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setPopUpMessage(<Loading/>)
        setPopUP(true);

        emailjs.sendForm("service_g4sao7f", "template_s19fxa3", form.current, "uzN5Her5p-5xyoYZP")
            .then(() => {
                clearForm();
                setPopUpMessage(<Success/>)
                setTimeout(()=>{
                        setPopUP(false)
                    }
                    , 3000);
            }, () => {
                setPopUpMessage(<Failed/>)
                setTimeout(()=>{
                        setPopUP(false)
                    }
                    , 3000);
            });

    };

    const clearForm = () =>{
        setName("");
        setEmail("");
        setMessage("");
    };
    const [popUp, setPopUP] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(<Loading/>);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="contact" className="min-h-screen pb-12">
            <div className={"text-center p-6"}>
                <h5 className="text-2xl pt-2 dark:text-white">Get in touch</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-teal-600 font-medium">Contact</h2>
            </div>
            <div className={"contact-container"}>
                <div  className={"contact-options"}>
                    <article className={"contact-option"}>
                        <MdOutlineEmail className="contact-image"/>
                        <h4 className="contact-option-title">Email</h4>
                        <h5>abdoohossamm@outlook.com</h5>
                        <a href="mailto:abdoohossamm@outlook.com" target="_blank">Send an email</a>
                    </article>
                    <article className={"contact-option"}>
                        <AiOutlineWhatsApp className="contact-image"/>
                        <h4 className="contact-option-title">WhatsApp</h4>
                        <h5>+201281870665</h5>
                        <a href="https://api.whatsapp.com/send?phone=201281870665" target="_blank">Send a message</a>
                    </article>
                    <article className={"contact-option"}>
                        <AiOutlineLinkedin className="contact-image"/>
                        <h4 className="contact-option-title">Linkedin</h4>
                        <h5>@abdalrahman-hossam</h5>
                        <a href="https://www.linkedin.com/in/abdalrahman-hossam/" target="_blank">Send a message</a>
                    </article>

                </div>
                <form id={"contact-form-id"} ref={form} onSubmit={sendEmail} className={"contact-form"}>
                    <input type="text" name="name" placeholder="Full Name..." value={name} onChange={(event) => setName(event.target.value)} required/>
                    <input type="email" name="email" placeholder="Email..." value={email} onChange={(event) => setEmail(event.target.value)} required/>
                    <input type="text" name="subject" placeholder="Subject..." value={name} onChange={(event) => setName(event.target.value)} required/>
                    <textarea name="message" placeholder="Message..." value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
                    <button type="submit" className="form-submit-btn">Send Message</button>
                </form>
            </div>

            {popUp && popUpMessage}

        </section>
    );
}

export default Contact;

