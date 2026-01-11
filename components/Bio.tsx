import React from 'react'
import { CyberCard } from './ui/CyberCard'
import { BIO_SUMMARY } from '../constants'

export const Bio: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-x border-white/5">
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white break-all">
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
                Software Engineer with <span className="text-cyber-cyan font-bold">8+ years of experience</span>, capable of <span className="text-white font-medium">independently architecting and delivering enterprise-level, battle-tested software solutions</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Deep expertise in <span className="text-cyber-cyan">React, React Native, and JavaScript</span>, complemented by strong proficiency in <span className="text-cyber-cyan">TypeScript, Node.js, and Python</span>. Leverage rigorous <span className="text-cyber-magenta">Clean Code principles and SOLID design patterns</span> to build maintainable, scalable systems.
              </p>
              <p className="text-gray-300 leading-relaxed font-light">
                Proven track record of <span className="text-white font-medium">engineering high-performance platforms from scratch</span>—including <span className="text-cyber-cyan">real-time financial trading ecosystems</span>—while adhering to industry best practices in <span className="text-cyber-magenta">TDD, security, and cloud infrastructure</span>. Experienced in collaborating with cross-functional teams to deliver high-quality products.
              </p>
            </div>
          </CyberCard>
        </div>

        <div className="space-y-6">
          <CyberCard title="CORE_SPECS">
            <ul className="space-y-4 font-mono text-[10px] xs:text-xs sm:text-sm text-gray-400">
              <li className="flex items-baseline gap-3 sm:gap-6 border-b border-gray-800 pb-2">
                <span className="w-16 sm:w-24 flex-shrink-0">Role</span>
                <span className="text-white">Full Stack & Mobile</span>
              </li>
              <li className="flex items-baseline gap-3 sm:gap-6 border-b border-gray-800 pb-2">
                <span className="w-16 sm:w-24 flex-shrink-0">Exp.</span>
                <span className="text-cyber-cyan">8+ Years</span>
              </li>
              <li className="flex items-baseline gap-3 sm:gap-6 border-b border-gray-800 pb-2">
                <span className="w-16 sm:w-24 flex-shrink-0">Loc.</span>
                <span className="text-white">Istanbul</span>
              </li>
              <li className="flex items-baseline gap-3 sm:gap-6">
                <span className="w-16 sm:w-24 flex-shrink-0">Focus</span>
                <span className="text-cyber-magenta underline decoration-cyber-magenta/30 underline-offset-4">Enterprise</span>
              </li>
            </ul>
          </CyberCard>
        </div>
      </div>
    </section>
  )
}