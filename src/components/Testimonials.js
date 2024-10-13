import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial">
          <p>"Great work!"</p>
          <p>- Client Name</p>
        </div>
        <div className="testimonial">
          <p>"Highly recommend!"</p>
          <p>- Client Name</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
