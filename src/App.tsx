import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Software } from './components/Software';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Services />
      <Software />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
}