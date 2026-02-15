import { useState } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { ImageLightbox } from '../components/ImageLightbox'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { MasonryGrid } from '../components/MasonryGrid'
import { Section } from '../components/Section'
import type { Product } from '../content/schema'
import { formatPrice } from '../lib/format'
import { buildProductMessage, buildWaLink } from '../lib/wa'

interface FeaturedProductsProps {
  id?: string
  title: string
  subtitle?: string
  products: Product[]
  brandName: string
  waNumber: string
  variant?: 'grid' | 'masonry'
}

export function FeaturedProducts({
  id,
  title,
  subtitle,
  products,
  brandName,
  waNumber,
  variant = 'grid',
}: FeaturedProductsProps) {
  const [activeImage, setActiveImage] = useState<Product | null>(null)

  return (
    <Section id={id} className="py-3 sm:py-5 lg:py-6">
      <Container className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
          {subtitle ? <p className="text-sm text-ink/70">{subtitle}</p> : null}
        </div>
        {variant === 'masonry' ? (
          <MasonryGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                brandName={brandName}
                waNumber={waNumber}
                onImageClick={setActiveImage}
                compact
              />
            ))}
          </MasonryGrid>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                brandName={brandName}
                waNumber={waNumber}
                onImageClick={setActiveImage}
              />
            ))}
          </div>
        )}
      </Container>
      <ImageLightbox
        isOpen={Boolean(activeImage)}
        src={activeImage?.image ?? ''}
        alt={activeImage?.name ?? ''}
        onClose={() => setActiveImage(null)}
      />
    </Section>
  )
}

interface ProductCardProps {
  product: Product
  brandName: string
  waNumber: string
  onImageClick: (product: Product) => void
  compact?: boolean
}

function ProductCard({ product, brandName, waNumber, onImageClick, compact }: ProductCardProps) {
  const message = buildProductMessage(product, brandName)
  const link = buildWaLink(waNumber, message)

  return (
    <Card className={`overflow-hidden ${compact ? 'mb-5 break-inside-avoid' : ''}`}>
      <div className="relative">
        <button
          type="button"
          onClick={() => onImageClick(product)}
          className="group block w-full overflow-hidden"
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition duration-300 group-hover:scale-[1.03] ${
              compact ? 'h-52' : 'h-40'
            }`}
            loading="lazy"
          />
        </button>
        {product.badge ? (
          <div className="absolute left-2 top-2">
            <Badge>{product.badge}</Badge>
          </div>
        ) : null}
      </div>
      <div className="space-y-2 p-3">
        <div>
          <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
          <p className="text-xs text-ink/70">{product.desc}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">{formatPrice(product.price)}</p>
          <Button href={link} size="sm">
            Pesan
          </Button>
        </div>
      </div>
    </Card>
  )
}
