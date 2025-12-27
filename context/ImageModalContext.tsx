import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ImageViewerModal } from '../components/ui/ImageViewerModal'

interface ImageModalContextType {
    openModal: (images: string[], index?: number, alt?: string) => void
    closeModal: () => void
    isOpen: boolean
    images: string[]
    initialIndex: number
    alt: string
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined)

export const ImageModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState<string[]>([])
    const [initialIndex, setInitialIndex] = useState(0)
    const [alt, setAlt] = useState('')

    const openModal = (imageUrls: string[] | string, index: number = 0, imageAlt: string = 'Full screen image') => {
        const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls]
        setImages(urls)
        setInitialIndex(index)
        setAlt(imageAlt)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <ImageModalContext.Provider value={{ openModal, closeModal, isOpen, images, initialIndex, alt }}>
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
