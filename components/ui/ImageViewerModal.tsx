import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useImageModal } from '../../context/ImageModalContext'

export const ImageViewerModal: React.FC = () => {
    const { isOpen, src, alt, closeModal } = useImageModal()

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal()
        }

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden' // Prevent scrolling
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center outline-none"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 md:-right-12 p-2 text-white hover:text-cyber-cyan transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={32} />
                        </button>

                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[85vh] object-contain rounded border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
