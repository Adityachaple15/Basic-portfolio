import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <a href="#!">Twitter</a>
        <a href="#!">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
