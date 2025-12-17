import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ImageViewerModal } from '../components/ui/ImageViewerModal'

interface ImageModalContextType {
    openModal: (src: string, alt?: string) => void
    closeModal: () => void
    isOpen: boolean
    src: string
    alt: string
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined)

export const ImageModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [src, setSrc] = useState('')
    const [alt, setAlt] = useState('')

    const openModal = (imageUrl: string, imageAlt: string = 'Full screen image') => {
        setSrc(imageUrl)
        setAlt(imageAlt)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <ImageModalContext.Provider value={{ openModal, closeModal, isOpen, src, alt }}>
            {children}
            <ImageViewerModal />
        </ImageModalContext.Provider>
    )
}

export const useImageModal = () => {
    const context = useContext(ImageModalContext)
    if (!context) {
        throw new Error('useImageModal must be used within an ImageModalProvider')
    }
    return context
}
