import React from 'react'
import { SOCIAL_LINKS } from '../constants'

export const ContactTerminal: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-cyber-dark border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white break-words">
          <span className="text-cyber-cyan font-mono mr-2">07.</span>
          <span className="text-cyber-cyan">INITIATE_HANDSHAKE</span>
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Available for new opportunities and high-impact collaborations.
          Signal availability is currently <span className="text-green-500 font-mono">HIGH</span>.
        </p>

        <a
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="inline-block relative group px-8 py-4 bg-transparent overflow-hidden"
        >
          <div className="absolute inset-0 border border-cyber-cyan group-hover:bg-cyber-cyan/10 transition-colors duration-300" />
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-cyan" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-cyan" />

          <span className="relative z-10 font-mono text-xl text-cyber-cyan tracking-widest group-hover:text-white transition-colors">
            TRANSMIT_EMAIL
          </span>
        </a>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>
            SYSTEM_STATUS: <span className="text-green-500">OPTIMAL</span>
          </p>
          <p>
            © {new Date().getFullYear()} FATIH TASDEMIR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  )
}