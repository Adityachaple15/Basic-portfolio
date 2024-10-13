import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {/* Replace with your own projects */}
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
        <div className="portfolio-item">Project 4</div>
      </div>
    </section>
  );
}

export default Portfolio;
