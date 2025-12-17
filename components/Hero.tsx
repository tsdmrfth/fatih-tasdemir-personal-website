import React from 'react'
import { motion } from 'framer-motion'
import { GlitchText } from './ui/GlitchText'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '../constants'
import { CatMonitor } from './CatMonitor'

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyber-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyber-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-cyber-cyan mb-4 flex items-center gap-3"
        >
          <span className="w-2 h-2 bg-cyber-cyan animate-ping" />
          <span>SYSTEM_ONLINE // ID: FATIH_TASDEMIR</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          <GlitchText text="SOFTWARE" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 bg-[length:200%_auto] animate-shimmer">
            BUILDER
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed border-l-2 border-cyber-magenta/50 pl-6 mb-10">
          Architecting scalable, autonomous systems where human creativity meets machine precision.
          Specialized in Algorithmic Trading Engines, AI Architectures, and High-Performance Applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-cyber-cyan hover:bg-cyber-cyan/10 hover:text-cyber-cyan transition-all duration-300">
            <Github size={20} />
            <span className="font-mono text-sm">GITHUB</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-cyber-magenta hover:bg-cyber-magenta/10 hover:text-cyber-magenta transition-all duration-300">
            <Linkedin size={20} />
            <span className="font-mono text-sm">LINKEDIN</span>
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 transition-all duration-300">
            <Mail size={20} />
            <span className="font-mono text-sm">CONTACT</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-gray-500 animate-pulse">SCROLL_TO_INITIATE</span>
        <ArrowDown className="text-cyber-cyan animate-bounce" size={20} />
      </motion.div>

      {/* Main Monitoring Cat (Right) */}
      <CatMonitor
        delay={500}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-50 h-[25vh] w-auto aspect-square pointer-events-none origin-bottom-right"
      />

      {/* Sleeping Cat (Bottom Left - Faded) */}
      <CatMonitor
        className="hidden lg:block absolute left-0 bottom-0 z-40 h-[15vh] w-auto aspect-square pointer-events-none origin-bottom-left"
        opacity={0.2}
        delay={1900}
        sleepEyeScale={0}
      />

      {/* Small Peeking Cat (Top Left) */}
      <CatMonitor
        type="sleeping"
        className="hidden lg:block absolute left-[10%] top-0 z-40 h-[10vh] w-auto aspect-square pointer-events-none origin-center"
        opacity={0.1}
        delay={2700}
      />
    </section>
  )
}