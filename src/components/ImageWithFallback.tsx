import type { ImgHTMLAttributes } from 'react'
import { getAssetPath } from '../lib/assets'

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
    const fallback = getAssetPath(fallbackSrc)
    if (target.src !== fallback) {
      target.src = fallback
    }
    if (onError) {
      onError(event)
    }
  }

  return <img src={getAssetPath(src ?? '')} alt={alt ?? ''} onError={handleError} {...props} />
}
