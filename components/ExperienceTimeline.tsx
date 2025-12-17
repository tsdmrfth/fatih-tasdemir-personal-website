import React from 'react'
import { EXPERIENCE } from '../constants'
import { CyberCard } from './ui/CyberCard'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { useImageModal } from '../context/ImageModalContext'

export const ExperienceTimeline: React.FC = () => {
  const { openModal } = useImageModal()

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-cyber-cyan font-mono mr-2">04.</span>
          CAREER_HISTORY
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow" />
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00f0ff]" />

            <div className="mb-2">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors inline-flex items-center gap-3">
                {exp.company}
                <span className="text-xs font-mono px-2 py-1 rounded border border-cyber-magenta/30 text-cyber-magenta bg-cyber-magenta/10">
                  {exp.role}
                </span>
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-mono text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
            </div>

            <CyberCard className="bg-white/5 border-l-4 border-l-cyber-cyan/50">
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, dIdx) => (
                  <li key={dIdx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-cyber-cyan mt-1.5 text-[10px]">▶</span>
                    {item}
                  </li>
                ))}
              </ul>
              {exp.images && exp.images.length > 0 && (
                <div className="mt-4 flex gap-4 overflow-x-auto py-4 px-4 -mx-4 mb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyber-cyan/30 scrollbar-track-transparent">
                  {exp.images.map((img, iIdx) => (
                    <img
                      key={iIdx}
                      src={img}
                      loading="lazy"
                      decoding="async"
                      alt={`${exp.company} screenshot ${iIdx + 1}`}
                      onClick={() => openModal(img, `${exp.company} screenshot ${iIdx + 1}`)}
                      className="h-64 w-36 object-cover rounded border border-white/10 flex-shrink-0 snap-center transition-transform duration-300 hover:scale-110 cursor-pointer hover:border-cyber-cyan/50"
                    />
                  ))}
                </div>
              )}
              {exp.products && exp.products.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Related_Deployments:</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {exp.products.map((prod, pIdx) => (
                      <div key={pIdx} className="bg-black/20 p-3 rounded border border-white/5 hover:border-white/10 transition-colors">
                        <p className="text-white text-sm font-bold mb-2">{prod.name}</p>
                        <div className="flex gap-3">
                          {prod.links.android && (
                            <a href={prod.links.android} target="_blank" rel="noreferrer" className="text-xs text-cyber-cyan hover:underline flex items-center gap-1">
                              Android <ExternalLink size={10} />
                            </a>
                          )}
                          {prod.links.ios && (
                            <a href={prod.links.ios} target="_blank" rel="noreferrer" className="text-xs text-cyber-magenta hover:underline flex items-center gap-1">
                              iOS <ExternalLink size={10} />
                            </a>
                          )}
                          {prod.links.apk && (
                            <a href={prod.links.apk} target="_blank" rel="noreferrer" className="text-xs text-yellow-400 font-mono hover:underline flex items-center gap-1">
                              APK <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CyberCard>
          </div>
        ))}
      </div>
    </section>
  )
}