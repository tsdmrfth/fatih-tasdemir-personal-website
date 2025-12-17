import React from 'react'
import { EDUCATION } from '../constants'
import { CyberCard } from './ui/CyberCard'

export const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 px-6 max-w-5xl mx-auto border-x border-white/5">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-cyber-cyan font-mono mr-2">05.</span>
                    EDUCATION
                </h2>
                <div className="h-[1px] bg-gray-800 flex-grow" />
            </div>

            <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                    <CyberCard key={idx} title="ACADEMIC_RECORD">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h3 className="text-xl text-white font-bold">{edu.school}</h3>
                                <p className="text-cyber-cyan">{edu.degree}</p>
                            </div>
                            <div className="text-gray-400 font-mono text-sm mt-2 md:mt-0">
                                {edu.period} | {edu.location}
                            </div>
                        </div>
                        {edu.courses && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-400 mb-2 font-mono">// RELEVANT_COURSEWORK</p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.courses.map((course, cIdx) => (
                                        <span key={cIdx} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CyberCard>
                ))}
            </div>
        </section>
    )
}
