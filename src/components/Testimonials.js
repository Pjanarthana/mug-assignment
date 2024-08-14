import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    { name: 'John', role: 'CEO', text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.', image: '/images/testimonial1.jpg' },
    // Add more testimonials if needed
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <p className="section-description">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;