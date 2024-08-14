import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    { icon: 'fa-paint-brush', title: 'UI/UX', description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum' },
    { icon: 'fa-laptop-code', title: 'Web Design', description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum' },
    { icon: 'fa-mobile-alt', title: 'App Design', description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum' },
    { icon: 'fa-pencil-ruler', title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum' },
  ];

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`fas ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;