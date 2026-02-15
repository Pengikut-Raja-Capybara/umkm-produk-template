interface RatingStarsProps {
  rating: number
}

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < Math.round(rating)
        return (
          <svg
            key={index}
            className={`h-4 w-4 ${filled ? 'text-accent' : 'text-ink/20'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        )
      })}
    </div>
  )
}
