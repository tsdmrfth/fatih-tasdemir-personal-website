import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface CatMonitorProps {
    className?: string // For positioning and size overrides
    type?: 'monitoring' | 'sleeping'
    delay?: number
    opacity?: number
    sleepEyeScale?: number // 0 = open, 1 = closed
}

export const CatMonitor: React.FC<CatMonitorProps> = ({
    className = "hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50 h-[25vh] w-auto aspect-square pointer-events-none origin-bottom-right",
    type = 'monitoring',
    delay = 1500,
    opacity = 1,
    sleepEyeScale = 0.9
}) => {
    const controls = useAnimation()
    const [isBlinking, setIsBlinking] = useState(false)

    useEffect(() => {
        const sequence = async () => {
            if (type !== 'monitoring') {
                controls.set({ opacity: opacity })
                return
            }

            controls.set({ opacity: 0 })
            await new Promise(r => setTimeout(r, delay))
            await controls.start({
                opacity: opacity,
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            })
        }

        sequence()
    }, [controls, delay, opacity, type])

    // Blinking Loop - Only for 'monitoring' or after waking up
    useEffect(() => {
        if (type === 'sleeping') return // Sleeping cats don't blink in a loop, they just wake up

        let timeoutId: NodeJS.Timeout

        const triggerBlink = () => {
            setIsBlinking(true)
            setTimeout(() => setIsBlinking(false), 200)
        }

        const loop = () => {
            // Random delay between 3 and 7 seconds
            const nextSessionVal = Math.random() * 4000 + 3000

            timeoutId = setTimeout(() => {
                triggerBlink()

                // Occasional double blink (30% chance)
                if (Math.random() < 0.3) {
                    setTimeout(() => triggerBlink(), 350)
                }

                loop()
            }, nextSessionVal)
        }

        loop()
        return () => clearTimeout(timeoutId)
    }, [type]) // Re-run if type changes, though typically static

    return (
        <motion.div
            animate={controls}
            style={{ marginRight: '0%' }}
            initial={{ opacity: 0 }}
            className={className}>
            <svg
                viewBox="0 0 512 512"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet">
                <g transform="matrix(1,0,0,1,34.033,49.465)">
                    <g transform="matrix(1,0,0,1,221.967,203.677)">
                        {/* Main Cat Head Path (Black with holes for eyes/nose) */}
                        <path
                            fill="#ffffff"
                            d="M210.627,48.995 C205.33,26.815 197.881,7.615 189.109,-9.268 C189.109,-9.268 189.274,-9.268 189.274,-9.268 C189.274,-9.268 201.854,-188.695 169.577,-196.806 C143.094,-203.427 73.74,-109.907 58.015,-113.714 C35.173,-120.169 15.311,-122.154 2.4,-122.154 C2.4,-122.154 -2.4,-122.154 -2.4,-122.154 C-15.145,-122.154 -35.173,-120.169 -57.85,-113.714 C-73.574,-110.072 -142.928,-203.427 -169.412,-196.806 C-201.688,-188.695 -189.109,-9.268 -189.109,-9.268 C-198.047,7.615 -205.33,26.981 -210.627,48.995 C-221.717,95.507 -114.789,203.427 -2.4,203.427 C-2.4,203.427 2.4,203.427 2.4,203.427 C114.789,203.427 221.717,95.507 210.627,48.995z M-51.395,80.279 C-62.154,96.666 -107.341,93.024 -122.9,65.382 C-140.611,33.933 -119.259,23.505 -96.251,27.974 C-57.85,35.588 -40.801,63.892 -51.395,80.279z M29.049,124.142 C26.732,131.591 9.352,146.322 -1.241,146.322 C-1.241,146.322 -2.731,146.322 -2.731,146.322 C-13.325,146.322 -30.704,131.591 -33.022,124.142 C-35.339,116.694 -21.27,113.052 -2.731,113.052 C-2.731,113.052 -1.241,113.052 -1.241,113.052 C17.463,113.052 31.366,116.694 29.049,124.142z M119.093,65.382 C103.534,93.024 58.346,96.666 47.588,80.279 C36.829,63.892 53.877,35.754 92.444,28.14 C115.617,23.505 136.804,33.933 119.093,65.382z"
                        />

                        {/* Left Eyelid */}
                        <motion.path
                            fill="#ffffff"
                            d="M-51.395,80.279 C-62.154,96.666 -107.341,93.024 -122.9,65.382 C-140.611,33.933 -119.259,23.505 -96.251,27.974 C-57.85,35.588 -40.801,63.892 -51.395,80.279z"
                            initial={{ scaleY: type === 'sleeping' ? sleepEyeScale : 0 }}
                            transition={{ duration: 0.2 }}
                            animate={{ scaleY: isBlinking ? 1 : (type === 'sleeping' ? sleepEyeScale : 0) }}
                            style={{ originY: 0, transformBox: 'fill-box' }} />

                        {/* Right Eyelid */}
                        <motion.path
                            fill="#ffffff"
                            d="M119.093,65.382 C103.534,93.024 58.346,96.666 47.588,80.279 C36.829,63.892 53.877,35.754 92.444,28.14 C115.617,23.505 136.804,33.933 119.093,65.382z"
                            initial={{ scaleY: type === 'sleeping' ? sleepEyeScale : 0 }}
                            transition={{ duration: 0.2 }}
                            animate={{ scaleY: isBlinking ? 1 : (type === 'sleeping' ? sleepEyeScale : 0) }}
                            style={{ originY: 0, transformBox: 'fill-box' }}
                        />
                    </g>
                </g>
            </svg>
        </motion.div>
    )
}
