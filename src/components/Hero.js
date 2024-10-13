import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Crafting Stunning Web Experiences</h1>
        <p>I transform ideas into engaging websites</p>
        <button className="cta-primary">See My Work</button>
        <button className="cta-secondary">Get in Touch</button>
      </div>
    </section>
  );
}

export default Hero;
