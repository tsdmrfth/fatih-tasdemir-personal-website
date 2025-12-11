import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-cyber-panel/30 border-y border-white/5 relative">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyber-cyan to-transparent opacity-50" />
      
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-cyber-cyan font-mono mr-2">02.</span>
          SYSTEM_DIAGNOSTICS
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <h3 className="text-cyber-magenta font-mono text-sm tracking-wider mb-4 uppercase border-l-2 border-cyber-magenta pl-3">
              {skillGroup.category}
            </h3>
            <div className="space-y-3">
              {skillGroup.items.map((skill, sIdx) => (
                <div key={sIdx} className="relative">
                  <div className="flex justify-between text-sm text-gray-400 mb-1 group-hover:text-white transition-colors">
                    <span>{skill}</span>
                    <span className="text-[10px] text-cyber-cyan opacity-0 group-hover:opacity-100 font-mono">READY</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                      className="h-full bg-cyber-cyan/60 group-hover:bg-cyber-cyan shadow-[0_0_5px_#00f0ff]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};