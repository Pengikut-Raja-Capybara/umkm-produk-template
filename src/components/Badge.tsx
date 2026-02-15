import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-surface">
      {children}
    </span>
  )
}
