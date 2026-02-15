import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { OrderInfo, OrderStep } from '../content/schema'

interface OrderStepsProps {
  id?: string
  steps: OrderStep[]
  info?: OrderInfo
}

export function OrderSteps({ id, steps, info }: OrderStepsProps) {
  return (
    <Section id={id}>
      <Container className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Langkah pemesanan</h2>
          <p className="text-sm text-ink/70">Cepat, jelas, dan bisa diikuti lewat chat.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="space-y-1.5 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                Step {index + 1}
              </p>
              <p className="text-xs font-semibold text-ink">{step.title}</p>
              <p className="text-xs text-ink/70">{step.desc}</p>
            </Card>
          ))}
        </div>
        {info ? (
          <Card className="space-y-1.5 p-4">
            <p className="text-xs font-semibold text-ink">Info pengiriman</p>
            <div className="text-xs text-ink/70">
              <p>Ekspedisi: {info.shipping}</p>
              <p>Estimasi: {info.estimate}</p>
              {info.returns ? <p>Retur: {info.returns}</p> : null}
            </div>
          </Card>
        ) : null}
      </Container>
    </Section>
  )
}
