import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { Promo } from '../content/schema'
import { buildWaLink } from '../lib/wa'

interface PromoBannerProps {
  id?: string
  promo: Promo
  waNumber: string
}

export function PromoBanner({ id, promo, waNumber }: PromoBannerProps) {
  const link = buildWaLink(waNumber, promo.waMessage)

  return (
    <Section id={id} className="py-6">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-accent/20 p-5">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/60 blur-2xl" />
          <div className="relative space-y-3">
            {promo.badge ? (
              <p className="inline-flex rounded-full bg-ink px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-surface">
                {promo.badge}
              </p>
            ) : null}
            <div>
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">{promo.headline}</h2>
              <p className="text-sm text-ink/70">{promo.desc}</p>
            </div>
            <Button href={link}>{promo.ctaLabel}</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
