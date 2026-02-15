import { Container } from '../components/Container'
import { ImageWithFallback } from '../components/ImageWithFallback'
import type { Brand, Contact } from '../content/schema'

interface FooterProps {
  brand: Brand
  contact: Contact
}

export function Footer({ brand, contact }: FooterProps) {
  return (
    <footer className="border-t border-ink/10 py-6">
      <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
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
          <p className="text-xs text-ink/70">{contact.address}</p>
        </div>
        <div className="space-y-1 text-xs text-ink/70">
          <p>WhatsApp: {contact.phone ?? contact.whatsapp}</p>
          <p>Email: {contact.email}</p>
          <p>Jam operasional: {contact.hours}</p>
        </div>
        <div className="space-y-1 text-xs text-ink/70">
          <p>Instagram: {contact.instagram}</p>
          <p>TikTok: {contact.tiktok}</p>
        </div>
      </Container>
    </footer>
  )
}
