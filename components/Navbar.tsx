import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cpu, Activity, Mail, GraduationCap, Laptop } from 'lucide-react'
import { throttle } from 'lodash'

const NAV_ITEMS = [
  { id: 'hero', label: '/', icon: null },
  { id: 'about', label: 'BIO', icon: Terminal },
  { id: 'skills', label: 'SKILLS', icon: Cpu },
  { id: 'projects', label: 'PROJECTS', icon: Activity },
  { id: 'experience', label: 'EXPERIENCE', icon: Shield },
  { id: 'education', label: 'EDUCATION', icon: GraduationCap },
  { id: 'freelance', label: 'FREELANCE', icon: Laptop },
  { id: 'contact', label: 'CONTACT', icon: Mail },
]

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY
      const innerHeight = window.innerHeight
      const bodyHeight = document.body.offsetHeight

      // Top of page check
      if (scrollY < 50) {
        setActiveSection(NAV_ITEMS[0].id)
        return
      }

      // Bottom of page check
      if ((innerHeight + scrollY) >= bodyHeight - 20) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id)
        return
      }

      // Find the section that constitutes the "current context"
      const spyLine = scrollY + 150
      let currentSectionId: string | null = null

      const sections = NAV_ITEMS.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      for (const { id, element } of sections) {
        if (element && element.offsetTop <= spyLine) {
          currentSectionId = id
        }
      }

      if (currentSectionId && currentSectionId !== activeSection) {
        setActiveSection(currentSectionId)
      }
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      handleScroll.cancel()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
    >
      <div className="bg-cyber-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full pointer-events-auto shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <ul className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex flex-col items-center group h-full justify-center`}
                >
                  {item.id === 'hero' ? (
                    <span className={`text-2xl font-bold transition-colors duration-300 font-mono ${isActive ? 'text-cyber-cyan' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      /
                    </span>
                  ) : (
                    <>
                      {Icon && (
                        <Icon
                          size={20}
                          className={`transition-colors duration-300 ${isActive ? 'text-cyber-cyan' : 'text-gray-400 group-hover:text-gray-200'}`}
                        />
                      )}
                      <span className={`text-[10px] font-mono mt-1 tracking-wider ${isActive ? 'text-cyber-cyan' : 'text-gray-400'}`}>
                        {item.label}
                      </span>
                    </>
                  )}

                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute -bottom-2 w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_8px_#00f0ff]"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}