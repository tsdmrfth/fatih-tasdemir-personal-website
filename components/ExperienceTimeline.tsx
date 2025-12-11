import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-cyber-cyan font-mono mr-2">04.</span>
          CAREER_SEQUENCE
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyber-black border border-gray-500 rounded-full group-hover:bg-cyber-cyan group-hover:border-cyber-cyan shadow-[0_0_0_4px_rgba(0,0,0,1)] transition-colors duration-300" />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-panel/50 p-6 border-l-2 border-transparent hover:border-cyber-cyan transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {exp.company}
                </h3>
                <span className="font-mono text-sm text-cyber-magenta bg-cyber-magenta/10 px-3 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-mono mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                  {exp.role}
                </span>
                <span className="flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                   {exp.location}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-gray-300 text-sm leading-relaxed">
                    • {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};