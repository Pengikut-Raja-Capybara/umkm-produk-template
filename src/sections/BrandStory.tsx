import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { BrandStory as BrandStoryType } from '../content/schema'

interface BrandStoryProps {
  story: BrandStoryType
}

export function BrandStory({ story }: BrandStoryProps) {
  return (
    <Section>
      <Container className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="space-y-2 lg:max-w-2xl">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">{story.title}</h2>
          <p className="text-sm text-ink/70">{story.body}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {story.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </Container>
    </Section>
  )
}
