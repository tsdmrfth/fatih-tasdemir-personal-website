import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'BIO', icon: Terminal },
  { id: 'skills', label: 'SYS_DIAG', icon: Cpu },
  { id: 'projects', label: 'MISSIONS', icon: Activity },
  { id: 'experience', label: 'LOGS', icon: Shield },
  { id: 'contact', label: 'COMMS', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Simple spy logic
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 300; // Offset

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
    >
      <div className="bg-cyber-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full pointer-events-auto shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <ul className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex flex-col items-center group`}
                >
                  <Icon 
                    size={20} 
                    className={`transition-colors duration-300 ${isActive ? 'text-cyber-cyan' : 'text-gray-500 group-hover:text-gray-300'}`}
                  />
                  <span className={`text-[10px] font-mono mt-1 tracking-wider ${isActive ? 'text-cyber-cyan' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="nav-glow"
                      className="absolute -bottom-2 w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_8px_#00f0ff]"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};