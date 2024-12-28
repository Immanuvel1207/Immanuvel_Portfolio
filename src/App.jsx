import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualifications from './components/Qualifications/Qualifications';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Papers from './components/Papers/Papers';
import Contact from './components/Contact/Contact';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Papers />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;