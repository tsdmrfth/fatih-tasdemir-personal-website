import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactTerminal } from './components/ContactTerminal';

function App() {
  return (
    <div className="relative bg-cyber-black min-h-screen text-gray-100 font-sans selection:bg-cyber-cyan/30 selection:text-white">
      {/* Visual Overlay Effects */}
      <div className="scanline" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Bio />
        <SkillsMatrix />
        <ProjectShowcase />
        <ExperienceTimeline />
        <ContactTerminal />
      </main>
    </div>
  );
}

export default App;