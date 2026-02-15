import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { FaqItem } from '../content/schema'

interface FAQProps {
  id?: string
  items: FaqItem[]
}

export function FAQ({ id, items }: FAQProps) {
  return (
    <Section id={id}>
      <Container className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Pertanyaan umum</h2>
          <p className="text-sm text-ink/70">Jawaban singkat untuk order lebih cepat.</p>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-ink/10 bg-white/70 p-3">
              <summary className="cursor-pointer text-xs font-semibold text-ink">
                {item.question}
              </summary>
              <p className="mt-2 text-xs text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
