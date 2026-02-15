import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { Advantage } from '../content/schema'

interface AdvantagesProps {
  items: Advantage[]
}

export function Advantages({ items }: AdvantagesProps) {
  return (
    <Section>
      <Container className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Kenapa pilih kami</h2>
          <p className="text-sm text-ink/70">Detail kecil yang bikin produk terasa premium.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} className="space-y-1.5 p-3">
              <p className="text-xs font-semibold text-ink">{item.title}</p>
              <p className="text-xs text-ink/70">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
