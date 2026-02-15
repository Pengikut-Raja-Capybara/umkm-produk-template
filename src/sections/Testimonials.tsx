import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { RatingStars } from '../components/RatingStars'
import { Section } from '../components/Section'
import type { Testimonial } from '../content/schema'

interface TestimonialsProps {
  items: Testimonial[]
  showSummary?: boolean
}

export function Testimonials({ items, showSummary }: TestimonialsProps) {
  const averageRating =
    items.reduce((sum, item) => sum + item.rating, 0) / Math.max(items.length, 1)

  return (
    <Section>
      <Container className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">Cerita pelanggan</h2>
            <p className="text-sm text-ink/70">Review nyata dari pembeli setia.</p>
          </div>
          {showSummary ? (
            <div className="rounded-2xl border border-ink/10 bg-white/70 px-3 py-2 text-xs">
              <p className="text-xs uppercase tracking-wide text-ink/50">Rating rata-rata</p>
              <div className="flex items-center gap-2">
                <RatingStars rating={averageRating} />
                <span className="font-semibold text-ink">{averageRating.toFixed(1)}</span>
              </div>
            </div>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} className="space-y-2 p-3">
              <RatingStars rating={item.rating} />
              <p className="text-xs text-ink/70">"{item.quote}"</p>
              <div>
                <p className="text-xs font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink/60">{item.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
