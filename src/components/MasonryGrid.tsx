import type { ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode
  className?: string
}

export function MasonryGrid({ children, className }: MasonryGridProps) {
  return (
    <div
      className={`columns-1 sm:columns-2 lg:columns-3 ${className ?? ''}`}
      style={{ columnGap: '1.25rem' }}
    >
      {children}
    </div>
  )
}
