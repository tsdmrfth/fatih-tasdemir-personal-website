import React from 'react'
import { FREELANCE_PROJECTS } from '../constants'
import { CyberCard } from './ui/CyberCard'
import { FaAndroid, FaApple } from 'react-icons/fa'
import { useImageModal } from '../context/ImageModalContext'
import { useProjectDetails } from '../context/ProjectDetailsContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const FreelanceProjects: React.FC = () => {
    const { openModal } = useImageModal()
    const { openProject } = useProjectDetails()

    return (
        <section id="freelance" className="py-20 px-6 max-w-5xl mx-auto border-x border-white/5">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-cyber-cyan font-mono mr-2">06.</span>
                    FREELANCE_PROJECTS
                </h2>
                <div className="h-[1px] bg-gray-800 flex-grow" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {FREELANCE_PROJECTS.map((project, idx) => (
                    <CyberCard
                        key={idx}
                        title={`PROJECT_0${idx + 1}`}
                        className="h-full cursor-pointer"
                        layoutId={`project-card-${project.title}`}
                        onClick={() => openProject(project, idx, 2, FREELANCE_PROJECTS)}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg text-white font-bold">{project.title}</h3>
                                    <div className="flex gap-2">
                                        {project.links?.android && (
                                            <a
                                                href={project.links.android}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#3DDC84]/30 bg-[#3DDC84]/10 text-[#3DDC84] hover:bg-[#3DDC84]/20 hover:border-[#3DDC84]/50 transition-all text-xs font-mono tracking-wider"
                                            >
                                                <FaAndroid size={16} />
                                                <span>Android</span>
                                            </a>
                                        )}
                                        {project.links?.ios && (
                                            <a
                                                href={project.links.ios}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 transition-all text-xs font-mono tracking-wider"
                                            >
                                                <FaApple size={16} />
                                                <span>iOS</span>
                                            </a>
                                        )}
                                        {project.links?.apk && (
                                            <a
                                                href={project.links.apk}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#3DDC84]/30 bg-[#3DDC84]/10 text-[#3DDC84] hover:bg-[#3DDC84]/20 hover:border-[#3DDC84]/50 transition-all text-xs font-mono tracking-wider"
                                            >
                                                <FaAndroid size={16} />
                                                <span>APK</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{project.description}</p>
                            {project.images && project.images.length > 0 && (
                                <div className="py-4 -mx-4 mb-0 group/swiper">
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        spaceBetween={16}
                                        slidesPerView="auto"
                                        initialSlide={0}
                                        centeredSlides={false}
                                        loop={project.images.length > 1}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true
                                        }}
                                        pagination={project.images.length > 1 ? {
                                            clickable: true,
                                            dynamicBullets: true,
                                        } : false}
                                        className="w-full !px-4"
                                    >
                                        {project.images.map((img, iIdx) => (
                                            <SwiperSlide key={iIdx} className="!w-auto">
                                                <img
                                                    src={img}
                                                    loading="lazy"
                                                    decoding="async"
                                                    alt={`${project.title} screenshot ${iIdx + 1}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        openModal(img, `${project.title} screenshot ${iIdx + 1}`)
                                                    }}
                                                    className="h-64 w-auto min-w-[140px] max-w-[400px] object-fit rounded border border-white/10 transition-transform duration-300 hover:scale-105 cursor-pointer hover:border-cyber-cyan/50 shadow-lg shadow-black/40"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </CyberCard>
                ))}
            </div>
        </section >
    )
}
