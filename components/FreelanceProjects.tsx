import React from 'react'
import { FREELANCE_PROJECTS } from '../constants'
import { CyberCard } from './ui/CyberCard'
import { ExternalLink } from 'lucide-react'
import { useImageModal } from '../context/ImageModalContext'

export const FreelanceProjects: React.FC = () => {
    const { openModal } = useImageModal()

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
                    <CyberCard key={idx} title={`PROJECT_0${idx + 1}`} className="h-full">
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
                                                className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 bg-white/5 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 transition-all text-[10px] font-mono tracking-wider"
                                            >
                                                ANDROID <ExternalLink size={10} />
                                            </a>
                                        )}
                                        {project.links?.ios && (
                                            <a
                                                href={project.links.ios}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all text-[10px] font-mono tracking-wider"
                                            >
                                                IOS <ExternalLink size={10} />
                                            </a>
                                        )}
                                        {project.links?.apk && (
                                            <a
                                                href={project.links.apk}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-2 py-1 rounded border border-white/10 bg-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all text-[10px] font-mono tracking-wider"
                                            >
                                                APK <ExternalLink size={10} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {project.images && project.images.length > 0 && (
                                    <div className="flex gap-4 overflow-x-auto py-4 px-4 -mx-4 mb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyber-cyan/30 scrollbar-track-transparent">
                                        {project.images.map((img, iIdx) => (
                                            <img
                                                key={iIdx}
                                                src={img}
                                                loading="lazy"
                                                decoding="async"
                                                alt={`${project.title} screenshot ${iIdx + 1}`}
                                                onClick={() => openModal(img, `${project.title} screenshot ${iIdx + 1}`)}
                                                className="h-64 w-36 object-cover rounded border border-white/10 flex-shrink-0 snap-center transition-transform duration-300 hover:scale-110 cursor-pointer hover:border-cyber-cyan/50"
                                            />
                                        ))}
                                    </div>
                                )}
                                <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{project.description}</p>
                            </div>
                        </div>
                    </CyberCard>
                ))}
            </div>
        </section>
    )
}
