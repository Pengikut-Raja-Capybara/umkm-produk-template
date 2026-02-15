import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-ink/10 bg-white/70 shadow-[0_20px_60px_-40px_rgba(47,41,32,0.8)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-42px_rgba(47,41,32,0.7)] ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
