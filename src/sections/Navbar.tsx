import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { ImageWithFallback } from '../components/ImageWithFallback'
import type { Brand } from '../content/schema'
import type { LayoutSectionId } from '../layouts/registry.ts'

interface NavbarProps {
  brand: Brand
  availableSections: LayoutSectionId[]
}

const navItems: Array<{ label: string; href: string; section: LayoutSectionId }> = [
  { label: 'Katalog', href: '#catalog', section: 'FeaturedProducts' },
  { label: 'Promo', href: '#promo', section: 'PromoBanner' },
  { label: 'Best Seller', href: '#bestseller', section: 'BestSeller' },
  { label: 'Order', href: '#order', section: 'OrderSteps' },
  { label: 'FAQ', href: '#faq', section: 'FAQ' },
  { label: 'Kontak', href: '#contact', section: 'ContactQuick' },
]

export function Navbar({ brand, availableSections }: NavbarProps) {
  const visibleItems = navItems.filter((item) => availableSections.includes(item.section))
  const primaryTarget =
    visibleItems[0]?.href ?? navItems.find((item) => item.section === 'FeaturedProducts')?.href ?? '#'

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-surface/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <ImageWithFallback
            src={brand.logo}
            alt={brand.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold text-ink">{brand.name}</p>
            <p className="text-xs text-ink/60">{brand.tagline}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-xs font-semibold text-ink/70 lg:flex">
          {visibleItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={primaryTarget} variant="outline" size="sm" className="hidden sm:inline-flex">
          Lihat Katalog
        </Button>
      </Container>
    </header>
  )
}
