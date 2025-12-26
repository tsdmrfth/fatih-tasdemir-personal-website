import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectDetails } from '../context/ProjectDetailsContext'
import { CyberCard } from './ui/CyberCard'
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export const ProjectDetailsOverlay: React.FC = () => {
    const { selectedProject, selectedIndex, gridCols, projects, closeProject, navigateToProject } = useProjectDetails()
    const swiperRef = useRef<SwiperType | null>(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const AUTOPLAY_DELAY = 5000

    useEffect(() => {
        if (selectedProject && swiperRef.current) {
            swiperRef.current.slideTo(0)
            setCurrentSlideIndex(0)
        }
    }, [selectedProject?.title])

    const images = selectedProject?.images || []
    const prevProject = selectedIndex > 0 ? projects[selectedIndex - 1] : null
    const nextProject = selectedIndex < projects.length - 1 ? projects[selectedIndex + 1] : null

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [selectedProject])

    return (
        <AnimatePresence mode="wait">
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 lg:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProject}
                        className="absolute inset-0 bg-cyber-black/98 backdrop-blur-2xl cursor-pointer" />



                    <div className="relative w-full max-w-[95vw] h-full max-h-[95vh] flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 z-[110]">
                        {/* The Card */}
                        <motion.div
                            key={selectedProject.title}
                            layoutId={`project-card-${selectedProject.title}`}
                            className="w-full md:w-[420px] h-full flex-shrink-0"
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}>
                            <CyberCard
                                title={`${selectedProject.type || 'PROJECT'} // ${selectedProject.status || 'LOG'}`}
                                className="h-full border-cyber-cyan/30">
                                <div className="flex flex-col h-full max-h-[calc(85vh-60px)]">
                                    <div className="flex justify-between items-start mb-6">
                                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none glow-text">{selectedProject.title}</h2>
                                    </div>

                                    <div className="flex-grow overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-cyber-cyan/20 scrollbar-track-transparent">
                                        <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
                                            {selectedProject.description}
                                        </p>

                                        {selectedProject.highlights && (
                                            <div className="mb-8">
                                                <p className="text-[10px] font-mono text-cyber-cyan mb-4 uppercase tracking-[0.3em] flex items-center gap-2">
                                                    <span className="w-8 h-[1px] bg-cyber-cyan/50" />
                                                    Detailed Mission Specs
                                                </p>
                                                <ul className="space-y-4">
                                                    {selectedProject.highlights.map((h, i) => (
                                                        <li key={i} className="text-gray-400 flex gap-4 text-sm leading-relaxed border-l border-white/5 pl-4 hover:border-cyber-cyan/50 transition-colors">
                                                            <span className="text-cyber-cyan font-mono opacity-50">0{i + 1}</span>
                                                            {h}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 space-y-6 pt-6 border-t border-white/5">
                                        {selectedProject.tech && (
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((t, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-cyber-magenta bg-cyber-magenta/5 px-2 py-1 border border-cyber-magenta/20">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            {selectedProject.link && (
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-cyber-cyan/5 hover:bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan rounded-none transition-all font-mono text-xs uppercase tracking-widest group/link">
                                                    {selectedProject.link.includes('github.com') ? <FaGithub size={18} /> : <FaGlobe size={18} />}
                                                    <span>Launch_Interface</span>
                                                    <motion.span
                                                        animate={{ x: [0, 5, 0] }}
                                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CyberCard>
                        </motion.div>

                        {/* Images/Webview Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex-grow min-w-0 flex flex-col h-full relative">
                            <div className="flex-grow flex flex-col justify-center min-h-0">
                                {
                                    selectedProject.showWebview && selectedProject.link
                                        ?
                                        (
                                            <div className="w-full h-full relative group">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                                <div className="relative h-full w-full bg-cyber-black/40 border border-cyber-cyan/20 overflow-hidden">
                                                    <div className="absolute top-0 left-0 right-0 h-6 bg-cyber-cyan/5 border-b border-cyber-cyan/20 flex items-center px-3 gap-2 z-10">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                                        </div>
                                                        <div className="text-[8px] font-mono text-cyber-cyan/40 truncate">
                                                            {selectedProject.link}
                                                        </div>
                                                    </div>
                                                    <iframe
                                                        loading="lazy"
                                                        src={selectedProject.link}
                                                        title={selectedProject.title}
                                                        className="w-full h-full pt-6 border-none" />
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <>
                                                <Swiper
                                                    loop={images.length > 1}
                                                    modules={[Autoplay, Pagination]}
                                                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                                                    onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
                                                    autoplay={{
                                                        delay: AUTOPLAY_DELAY,
                                                        disableOnInteraction: false,
                                                    }}
                                                    className="w-full h-full">
                                                    {images.map((img, i) => (
                                                        <SwiperSlide key={i}>
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <motion.img
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ duration: 0.5 }}
                                                                    src={img}
                                                                    alt={`${selectedProject.title} ${i + 1}`}
                                                                    className="max-w-full max-h-full w-auto h-auto object-contain shadow-[0_0_80px_rgba(0,240,255,0.15),0_20px_60px_rgba(0,0,0,0.9)] border border-cyber-cyan/10"
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>

                                                {/* Custom Pagination Indicators */}
                                                <div className="flex justify-center gap-2 mt-4 z-30" key={selectedProject.title}>
                                                    {images.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-16 h-1 bg-white/10 rounded-none relative overflow-hidden cursor-pointer group"
                                                            onClick={() => swiperRef.current?.slideToLoop(i)}
                                                        >
                                                            <div className="absolute inset-0 bg-white/20" />
                                                            <motion.div
                                                                key={`${i}-${currentSlideIndex === i}`}
                                                                className="absolute inset-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                                                initial={i < currentSlideIndex ? { width: "100%" } : { width: "0%" }}
                                                                animate={{ width: i <= currentSlideIndex ? "100%" : "0%" }}
                                                                transition={{
                                                                    duration: i === currentSlideIndex ? AUTOPLAY_DELAY / 1000 : 0.3,
                                                                    ease: i === currentSlideIndex ? "linear" : "easeInOut"
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )
                                }
                            </div>

                            {/* Project Navigation Section - completely at the bottom */}
                            <div className="mt-4 flex items-center justify-center gap-4 z-30 px-2 shrink-0 relative w-full">
                                <div className="flex gap-4">
                                    {/* Previous Project Button - always visible */}
                                    <button
                                        onClick={() => prevProject && navigateToProject(selectedIndex - 1)}
                                        disabled={!prevProject}
                                        className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all hover:-translate-x-1 disabled:opacity-30 disabled:cursor-not-allowed">
                                        <FaChevronLeft size={16} />
                                        <div className="text-left">
                                            <p className="text-[8px] font-mono text-cyber-cyan/50 uppercase tracking-[0.1em]">PREV</p>
                                            <p className="text-[11px] font-bold text-white truncate max-w-[100px]">
                                                {prevProject?.title || 'None'}
                                            </p>
                                        </div>
                                    </button>

                                    {/* Next Project Button - always visible */}
                                    <button
                                        onClick={() => nextProject && navigateToProject(selectedIndex + 1)}
                                        disabled={!nextProject}
                                        className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-none text-white hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all hover:translate-x-1 disabled:opacity-30 disabled:cursor-not-allowed">
                                        <div className="text-right">
                                            <p className="text-[8px] font-mono text-cyber-cyan/50 uppercase tracking-[0.1em]">NEXT</p>
                                            <p className="text-[11px] font-bold text-white truncate max-w-[100px]">
                                                {nextProject?.title || 'None'}
                                            </p>
                                        </div>
                                        <FaChevronRight size={16} />
                                    </button>
                                </div>

                                {/* Close Button - Aligned to the Right */}
                                <button
                                    onClick={closeProject}
                                    className="absolute right-0 p-2 bg-cyber-black/80 hover:bg-cyber-magenta/20 border border-cyber-magenta/30 text-cyber-magenta rounded-none transition-all shadow-[0_0_20px_rgba(255,0,60,0.2)] group backdrop-blur-md">
                                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
