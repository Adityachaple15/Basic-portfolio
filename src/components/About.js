import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="profile-pic"></div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>I'm a front-end developer with experience in creating stunning websites...</p>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>
    </section>
  );
}

export default About;
