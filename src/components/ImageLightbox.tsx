import { useEffect } from 'react'
import { ImageWithFallback } from './ImageWithFallback'

interface ImageLightboxProps {
  isOpen: boolean
  src: string
  alt: string
  onClose: () => void
}

export function ImageLightbox({ isOpen, src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 right-0 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white"
        >
          Tutup
        </button>
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-auto max-h-[80vh] w-full rounded-3xl object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}
