import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { Section } from '../components/Section'
import type { Brand, Cta } from '../content/schema'
import { buildWaLink } from '../lib/wa'

interface HeroProductProps {
  brand: Brand
  cta: Cta
  secondaryHref?: string
  variant?: 'default' | 'minimal'
}

export function HeroProduct({ brand, cta, secondaryHref, variant = 'default' }: HeroProductProps) {
  const waLink = buildWaLink(cta.primary.href, cta.primary.message ?? '')
  const isMinimal = variant === 'minimal'

  return (
    <Section className="relative overflow-hidden">
      {!isMinimal ? (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(231,210,173,0.45),transparent_55%)]" />
      ) : null}
      <Container className={`grid items-center gap-6 ${isMinimal ? 'lg:grid-cols-[1fr_1fr]' : 'lg:grid-cols-[1.1fr_0.9fr]'}`}>
        <div className="space-y-4 animate-fade-up">
          {!isMinimal ? (
            <p className="inline-flex items-center rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
              Koleksi terbaru
            </p>
          ) : null}
          <div className="space-y-2">
            <h1
              className={`font-semibold text-ink ${
                isMinimal ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-2xl sm:text-3xl lg:text-4xl'
              }`}
            >
              {brand.name}
            </h1>
            <p className="max-w-xl text-sm text-ink/70 sm:text-base">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Button href={waLink}>{cta.primary.label}</Button>
            <Button href={secondaryHref ?? cta.secondary.href} variant="outline">
              {cta.secondary.label}
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-up">
          {!isMinimal ? (
            <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-accent/30 blur-2xl animate-float-slow" />
          ) : null}
          <ImageWithFallback
            src={brand.heroImage}
            alt="Produk unggulan"
            className={`w-full rounded-3xl object-cover shadow-[0_30px_80px_-50px_rgba(47,41,32,0.9)] ${
              isMinimal ? 'h-[240px] sm:h-[280px]' : 'h-[300px] sm:h-[360px]'
            }`}
          />
        </div>
      </Container>
    </Section>
  )
}
