import type { Product } from '../content/schema'

export function buildWaLink(base: string, message: string) {
  const encoded = encodeURIComponent(message)
  if (base.includes('?')) {
    return `${base}&text=${encoded}`
  }
  return `${base}?text=${encoded}`
}

export function buildProductMessage(product: Product, brandName: string) {
  if (product.waMessage) {
    return product.waMessage
  }
  return `Halo ${brandName}, saya mau pesan ${product.name}.`
}
