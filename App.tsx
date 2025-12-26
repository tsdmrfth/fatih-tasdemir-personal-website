import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Bio } from './components/Bio'
import { SkillsMatrix } from './components/SkillsMatrix'
import { ProjectShowcase } from './components/ProjectShowcase'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Education } from './components/Education'
import { FreelanceProjects } from './components/FreelanceProjects'
import { ContactTerminal } from './components/ContactTerminal'
import { ImageModalProvider } from './context/ImageModalContext'
import { ProjectDetailsProvider } from './context/ProjectDetailsContext'
import { ProjectDetailsOverlay } from './components/ProjectDetailsOverlay'

function App() {
  return (
    <ProjectDetailsProvider>
      <ImageModalProvider>
        <div className="relative bg-cyber-black min-h-screen text-gray-100 font-sans selection:bg-cyber-cyan/30 selection:text-white">
          <div className="scanline" />
          <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

          <Navbar />

          <main className="relative z-10 flex flex-col gap-0">
            <Hero />
            <Bio />
            <SkillsMatrix />
            <ProjectShowcase />
            <ExperienceTimeline />
            <Education />
            <FreelanceProjects />
            <ContactTerminal />
          </main>

          <ProjectDetailsOverlay />
        </div>
      </ImageModalProvider>
    </ProjectDetailsProvider>
  )
}

export default App