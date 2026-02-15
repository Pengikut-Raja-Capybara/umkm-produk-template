import { Container } from "../components/Container";
import { ImageWithFallback } from "../components/ImageWithFallback";
import type { Brand, Contact } from "../content/schema";

interface FooterProps {
  brand: Brand;
  contact: Contact;
}

export function Footer({ brand, contact }: FooterProps) {
  return (
    <footer className="border-t border-ink/10 py-6">
      <Container className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2 lg:max-w-sm">
          <div className="flex items-center gap-2">
            <ImageWithFallback src={brand.logo} alt={brand.name} className="h-8 w-8 rounded-full object-cover" />
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
        <div>
          <div className="flex items-center gap-2 ">
            <a
              href={contact.instagram}
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition hover:border-ink/40 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm10.25 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
                />
              </svg>
            </a>
            <a
              href={contact.tiktok}
              aria-label="TikTok"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition hover:border-ink/40 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path fill="currentColor" d="M16.5 3c.6 2.2 2 3.6 4.2 4.1v3.1c-1.7.1-3.1-.4-4.2-1.2v5.1a6.5 6.5 0 1 1-6.7-6.5c.3 0 .6 0 .9.1v3.2a3.5 3.5 0 1 0 3.4 3.5V3h2.4Z" />
              </svg>
            </a>
          </div>
          <div className="mt-3 text-center text-xs text-ink/50">@2026 Dibuat oleh Raja Capybara</div>
        </div>
      </Container>
    </footer>
  );
}
