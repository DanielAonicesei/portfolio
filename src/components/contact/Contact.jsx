import React from 'react';
import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

 export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_hmqdiag', 'template_iu2cdey', form.current, 'Qrh4-6Jtu-loX4yOL');

      e.target.reset();
    };
    return (
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>aoni.daniel@gmail.com</h5>
              <a href="mailto:aoni.daniel@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <FaFacebookMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Daniel Aonicesei</h5>
              <a href="https://m.me/danutz.aonicesei" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+40757873032</h5>
              <a href="https://api.whatsapp.com/send?phone=40757873032" target="_blank">Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    )
}

export default Contact