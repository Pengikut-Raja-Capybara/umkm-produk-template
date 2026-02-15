import { useState } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { ImageLightbox } from '../components/ImageLightbox'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { Section } from '../components/Section'
import type { Product } from '../content/schema'
import { formatPrice } from '../lib/format'
import { buildProductMessage, buildWaLink } from '../lib/wa'

interface BestSellerProps {
  id?: string
  products: Product[]
  brandName: string
  waNumber: string
}

export function BestSeller({ id, products, brandName, waNumber }: BestSellerProps) {
  const [activeImage, setActiveImage] = useState<Product | null>(null)

  return (
    <Section id={id}>
      <Container className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">Best Seller</p>
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">Paling sering diburu</h2>
          </div>
          <Badge>Favorite</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const message = buildProductMessage(product, brandName)
            const link = buildWaLink(waNumber, message)
            return (
              <Card key={product.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveImage(product)}
                  className="group block w-full overflow-hidden"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
                <div className="space-y-2 p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
                    {product.badge ? <Badge>{product.badge}</Badge> : null}
                  </div>
                  <p className="text-xs text-ink/70">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">{formatPrice(product.price)}</p>
                    <Button href={link} size="sm">
                      Pesan
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
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
