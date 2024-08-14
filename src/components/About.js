import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/profile-pic2.jpg" alt="Muhammad Umair" />
        </div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <div className="skills">
            <div className="skill">
              <span>UX</span>
              <div className="skill-bar"><div style={{width: '90%'}}></div></div>
            </div>
            <div className="skill">
              <span>Website Design</span>
              <div className="skill-bar"><div style={{width: '85%'}}></div></div>
            </div>
            <div className="skill">
              <span>App Design</span>
              <div className="skill-bar"><div style={{width: '80%'}}></div></div>
            </div>
            <div className="skill">
              <span>Graphic Design</span>
              <div className="skill-bar"><div style={{width: '75%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;