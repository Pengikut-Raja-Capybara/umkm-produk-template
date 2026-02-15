import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { Contact } from '../content/schema'
import { buildWaLink } from '../lib/wa'

interface ContactQuickProps {
  id?: string
  contact: Contact
}

export function ContactQuick({ id, contact }: ContactQuickProps) {
  const waLink = buildWaLink(contact.whatsapp, 'Halo, saya mau tanya produk.')

  return (
    <Section id={id}>
      <Container>
        <div className="grid gap-4 rounded-3xl border border-ink/10 bg-white/70 p-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-ink">Kunjungi store kami</p>
              <p className="text-xs text-ink/70">Coba langsung dan pilih ukuran terbaik.</p>
            </div>
            <div className="text-xs text-ink/70">
              <p className="font-semibold text-ink">{contact.address}</p>
              {contact.hours ? <p>Jam buka: {contact.hours}</p> : null}
              {contact.phone ? <p>Telepon: {contact.phone}</p> : null}
            </div>
            <Button href={waLink}>Chat WhatsApp</Button>
          </div>
          {contact.mapEmbedUrl ? (
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Lokasi toko"
                src={contact.mapEmbedUrl}
                className="h-52 w-full sm:h-60"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
