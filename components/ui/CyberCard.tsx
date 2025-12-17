import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CyberCardProps {
  children: ReactNode
  className?: string
  title?: string
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, className = "", title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-[1px] group ${className}`}
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/30 via-transparent to-cyber-magenta/30 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan transition-all duration-300 group-hover:w-16 group-hover:h-16" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-magenta transition-all duration-300 group-hover:w-16 group-hover:h-16" />

      <div className="relative bg-cyber-panel/90 backdrop-blur-sm h-auto min-h-full p-6 border border-white/5 hover:border-white/10 transition-colors">
        {title && (
          <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
            <div className="w-1.5 h-1.5 bg-cyber-cyan animate-pulse" />
            <h3 className="text-sm font-mono text-cyber-cyan tracking-widest uppercase">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  )
}