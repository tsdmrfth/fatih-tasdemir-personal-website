import React from 'react'
import { PROJECTS } from '../constants'
import { CyberCard } from './ui/CyberCard'
import { ExternalLink, Code } from 'lucide-react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { useImageModal } from '../context/ImageModalContext'
import { useProjectDetails } from '../context/ProjectDetailsContext'

export const ProjectShowcase: React.FC = () => {
  const { openModal } = useImageModal()
  const { openProject } = useProjectDetails()

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white break-all">
          <span className="text-cyber-cyan font-mono mr-2">03.</span>
          MISSION_LOGS
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-8 scroll-smooth no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center">
            <CyberCard
              title={`PROJECT_${idx + 1} // ${project.status}`}
              className="h-full flex flex-col cursor-pointer"
              layoutId={`project-card-${project.title}`}
              onClick={() => openProject(project, idx, 2, PROJECTS)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  {project.type && (
                    <span className="text-[10px] font-mono text-cyber-magenta border border-cyber-magenta/30 px-2 py-1 rounded mb-2 inline-block">
                      {project.type.toUpperCase()}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  {project.role && <p className="text-sm text-gray-400 font-mono">{project.role}</p>}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/5 hover:bg-cyber-cyan hover:text-black rounded-full transition-all"
                  >
                    {project.link.includes('github.com') ? <FaGithub size={18} /> : <FaGlobe size={18} />}
                  </a>
                )}
              </div>

              <p className="text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>

              {project.images && project.images.length > 0 && (
                <div className="flex gap-4 overflow-x-auto py-4 px-4 -mx-4 mb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyber-cyan/30 scrollbar-track-transparent">
                  {project.images.map((img, iIdx) => (
                    <img
                      key={iIdx}
                      src={img}
                      loading="lazy"
                      decoding="async"
                      alt={`${project.title} screenshot ${iIdx + 1}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(project.images || [], iIdx, `${project.title} screenshot ${iIdx + 1}`)
                      }}
                      className="h-64 w-auto rounded border border-white/10 flex-shrink-0 snap-center transition-transform duration-300 hover:scale-105 cursor-pointer hover:border-cyber-cyan/50 shadow-lg shadow-black/40"
                    />
                  ))}
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-mono text-gray-500 mb-2">KEY_METRICS:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyber-cyan mt-1">›</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-cyber-cyan/80 bg-cyber-cyan/10 px-3 py-1.5 border border-cyber-cyan/10">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </CyberCard>
          </div>
        ))}
      </div>
    </section>
  )
}