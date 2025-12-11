import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-cyan opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px]"
        aria-hidden="true"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-magenta opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px]"
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </div>
  );
};