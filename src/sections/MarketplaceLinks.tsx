import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { MarketplaceLink } from '../content/schema'

interface MarketplaceLinksProps {
  items: MarketplaceLink[]
}

export function MarketplaceLinks({ items }: MarketplaceLinksProps) {
  if (!items.length) {
    return null
  }

  return (
    <Section>
      <Container className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Toko resmi</h2>
          <p className="text-sm text-ink/70">Cek stok di marketplace favoritmu.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Button key={item.label} href={item.href} variant="outline" size="sm">
              {item.label}
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  )
}
