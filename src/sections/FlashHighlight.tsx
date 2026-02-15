import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { FlashHighlightItem } from '../content/schema'

interface FlashHighlightProps {
  items: FlashHighlightItem[]
}

export function FlashHighlight({ items }: FlashHighlightProps) {
  return (
    <Section>
      <Container className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="p-3">
            <p className="text-xs font-semibold text-ink">{item.title}</p>
            <p className="text-xs text-ink/70">{item.desc}</p>
          </Card>
        ))}
      </Container>
    </Section>
  )
}
