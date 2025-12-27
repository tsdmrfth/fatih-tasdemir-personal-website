import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useImageModal } from '../../context/ImageModalContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const AUTOPLAY_DELAY = 5000

export const ImageViewerModal: React.FC = () => {
    const { isOpen, images, initialIndex, alt, closeModal } = useImageModal()
    const [currentIndex, setCurrentIndex] = useState(0)
    const swiperRef = useRef<SwiperType | null>(null)

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, initialIndex])

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal()
        }

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, closeModal])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl"
                    onClick={closeModal}
                >
                    <div className="absolute top-6 left-0 right-0 z-[110] px-4 md:px-12 flex justify-center">
                        {images.length > 1 && (
                            <div className="flex gap-1.5 w-full max-w-2xl justify-center">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-1 bg-white/10 rounded-full relative overflow-hidden cursor-pointer flex-grow max-w-[60px]"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            swiperRef.current?.slideToLoop(i)
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-white/5" />
                                        <motion.div
                                            key={`${i}-${currentIndex === i}`}
                                            className="absolute inset-0 bg-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.6)]"
                                            initial={i < currentIndex ? { width: "100%" } : { width: "0%" }}
                                            animate={{ width: i <= currentIndex ? "100%" : "0%" }}
                                            transition={{
                                                duration: i === currentIndex ? AUTOPLAY_DELAY / 1000 : 0.3,
                                                ease: i === currentIndex ? "linear" : "easeInOut"
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full flex items-center justify-center outline-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 md:right-12 z-[110] p-3 bg-cyber-black/50 border border-white/10 rounded-full text-white hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all backdrop-blur-md"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            initialSlide={initialIndex}
                            onSwiper={(swiper) => { swiperRef.current = swiper }}
                            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                            loop={images.length > 1}
                            autoplay={{
                                delay: AUTOPLAY_DELAY,
                                disableOnInteraction: false,
                            }}
                            className="w-full h-full"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i} className="flex items-center justify-center">
                                    <div className="w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-20">
                                        <img
                                            src={img}
                                            alt={`${alt} ${i + 1}`}
                                            className="max-w-full max-h-full w-auto h-auto object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
