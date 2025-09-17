import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
// import Experience from './Components/Experience';
import Contact from './Components/Contact';
// import Resume from './Components/Resume';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Handle scroll spy for active navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact', 'resume'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App bg-black min-h-screen">
      {/* Sticky Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      </div>

      {/* All Sections in Single Scroll */}
      <div className="single-scroll-container">
        
        {/* Home Section */}
        <section id="home" className="section">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <Skills />
        </section>

        {/* Experience Section
        <section id="experience" className="section">
          <Experience />
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="section">
          <Contact />
        </section>

        {/* Resume Section
        <section id="resume" className="section">
          <Resume />
        </section> */}

      </div>
    </div>
  );
}

export default App;