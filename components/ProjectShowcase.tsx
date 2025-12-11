import React from 'react';
import { PROJECTS } from '../constants';
import { CyberCard } from './ui/CyberCard';
import { ExternalLink, Code } from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-cyber-cyan font-mono mr-2">03.</span>
          MISSION_LOGS
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <CyberCard key={idx} title={`PROJECT_${idx + 1} // ${project.status}`} className="h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-mono text-cyber-magenta border border-cyber-magenta/30 px-2 py-1 rounded mb-2 inline-block">
                  {project.type.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono">{project.role}</p>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-cyber-cyan hover:text-black rounded-full transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <p className="text-gray-300 mb-6 flex-grow">
              {project.description}
            </p>

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

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
              {project.tech.map((tech, tIdx) => (
                <span key={tIdx} className="text-xs font-mono text-cyber-cyan/80 bg-cyber-cyan/10 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </CyberCard>
        ))}
      </div>
    </section>
  );
};