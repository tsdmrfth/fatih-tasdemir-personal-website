import React from 'react';
import { CyberCard } from './ui/CyberCard';

export const Bio: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-cyber-cyan font-mono mr-2">01.</span>
          OPERATOR_PROFILE
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
           <CyberCard title="BIO_DATA" className="h-full flex flex-col justify-between">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                  With <span className="text-cyber-cyan font-semibold">8+ years of field experience</span>, I operate as a high-level engineer capable of independently architecting enterprise-grade solutions. My expertise spans the full spectrum of modern development—from constructing high-concurrency backend gateways to crafting pixel-perfect mobile interfaces.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                  My technical output is fueled by a deep engagement with <span className="text-white font-medium">Algorithmic Trading</span> and <span className="text-white font-medium">DeFi ecosystems</span>, where I build autonomous agents. To balance this logic-driven environment, I perform <span className="text-cyber-magenta font-medium">Improv Theatre</span>—a discipline that sharpens my adaptability and real-time collaboration skills under pressure.
                </p>
              </div>
              <div className="p-4 bg-black/40 border border-cyber-cyan/20 rounded-sm mt-4">
                <p className="font-mono text-sm text-cyber-cyan mb-2">// CURRENT_MISSION</p>
                <p className="text-gray-400 italic">
                  "Merging the precision of algorithmic systems with the adaptability of human creativity to solve complex problems in FinTech and AI."
                </p>
              </div>
           </CyberCard>
        </div>

        <div className="space-y-6">
           <CyberCard title="CORE_SPECS">
             <ul className="space-y-3 font-mono text-sm text-gray-400">
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Architecture</span>
                 <span className="text-white">Full Stack / Mobile</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Specialty</span>
                 <span className="text-cyber-cyan">Algo Trading / AI</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Location</span>
                 <span className="text-white">Istanbul / Remote</span>
               </li>
               <li className="flex justify-between">
                 <span>Soft Skills</span>
                 <span className="text-cyber-magenta">Improv / Leadership</span>
               </li>
             </ul>
           </CyberCard>
        </div>
      </div>
    </section>
  );
};