import type { ImgHTMLAttributes } from 'react'

const FALLBACK_SRC = '/assets/placeholder.svg'

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = FALLBACK_SRC,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const handleError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (event) => {
    const target = event.currentTarget
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc
    }
    if (onError) {
      onError(event)
    }
  }

  return <img src={src} alt={alt ?? ''} onError={handleError} {...props} />
}
