import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { category: 'web-design', image: '/images/project-thumbnails/project1.jpg', title: 'AirCalling Landing Page Design' },
    { category: 'web-design', image: '/images/project-thumbnails/project2.jpg', title: 'Business Landing Page Design' },
    { category: 'web-design', image: '/images/project-thumbnails/project3.jpg', title: 'Ecom Web Page Design' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className="project-filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('ui-ux')} className={filter === 'ui-ux' ? 'active' : ''}>UI/UX</button>
        <button onClick={() => setFilter('web-design')} className={filter === 'web-design' ? 'active' : ''}>Web Design</button>
        <button onClick={() => setFilter('app-design')} className={filter === 'app-design' ? 'active' : ''}>App Design</button>
        <button onClick={() => setFilter('graphic-design')} className={filter === 'graphic-design' ? 'active' : ''}>Graphic Design</button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;