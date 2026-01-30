import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero personal={resumeData.personal} />
      <About personal={resumeData.personal} />
      <Skills skills={resumeData.skills} />
      <Experience experience={resumeData.experience} />
      <Projects projects={resumeData.projects} />
      <Education 
        education={resumeData.education} 
        certifications={resumeData.certifications} 
      />
      <Contact 
        personal={resumeData.personal}
        languages={resumeData.languages}
      />
      <Footer personal={resumeData.personal} />
    </div>
  );
}

export default App;
