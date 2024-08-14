import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import  { useState, useEffect } from 'react';


// Import global styles
import './styles/index.css';

// Import component-specific styles
import './styles/Header.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Services.css';
import './styles/Projects.css';
import './styles/Testimonials.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;