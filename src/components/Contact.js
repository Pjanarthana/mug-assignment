import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the email to your server
    console.log('Form submitted with email:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="contact">
      <h2>Let's Design Together</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className="cta">Contact Me</button>
      </form>
    </section>
  );
}

export default Contact;