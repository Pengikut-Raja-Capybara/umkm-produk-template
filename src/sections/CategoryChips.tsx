import { Container } from '../components/Container'
import { Section } from '../components/Section'
import type { Category } from '../content/schema'

interface CategoryChipsProps {
  enabled: boolean
  categories: Category[]
  activeCategory: string
  onChange: (value: string) => void
}

export function CategoryChips({
  enabled,
  categories,
  activeCategory,
  onChange,
}: CategoryChipsProps) {
  if (!enabled) {
    return null
  }

  const allCategories = [{ id: 'all', label: 'Semua' }, ...categories]

  return (
    <Section className="py-1.5 sm:py-2 lg:py-3">
      <Container className="flex flex-wrap gap-2">
        {allCategories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition ${
                isActive
                  ? 'bg-ink text-surface'
                  : 'border border-ink/10 bg-white/70 text-ink/70 hover:border-ink/40'
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </Container>
    </Section>
  )
}
