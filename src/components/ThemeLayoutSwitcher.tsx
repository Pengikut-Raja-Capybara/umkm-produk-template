import { useState } from 'react'
import type { LayoutId, ThemeId } from '../content/schema'

interface ThemeLayoutSwitcherProps {
  layout: LayoutId
  theme: ThemeId
  onLayoutChange: (layout: LayoutId) => void
  onThemeChange: (theme: ThemeId) => void
}

const layoutOptions: LayoutId[] = ['A', 'B', 'C', 'D', 'E']

const themeOptions: { id: ThemeId; label: string; swatch: string }[] = [
  { id: 'capybara-sand', label: 'Sand', swatch: '#f2b872' },
  { id: 'mint-stone', label: 'Mint', swatch: '#6fd1b8' },
  { id: 'navy-cream', label: 'Navy', swatch: '#7aa6f8' },
]

export function ThemeLayoutSwitcher({
  layout,
  theme,
  onLayoutChange,
  onThemeChange,
}: ThemeLayoutSwitcherProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-xs font-semibold text-ink shadow-lg backdrop-blur"
        aria-expanded={open}
        aria-label="Buka pilihan layout dan tema"
      >
        {open ? 'Tutup' : 'Tema'}
      </button>
      {open ? (
        <div className="mt-3 w-60 space-y-4 rounded-3xl border border-ink/10 bg-white/90 p-4 shadow-xl backdrop-blur">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Layout</p>
            <div className="flex flex-wrap gap-2">
              {layoutOptions.map((option) => {
                const active = option === layout
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onLayoutChange(option)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      active
                        ? 'bg-ink text-surface'
                        : 'border border-ink/10 bg-white/70 text-ink/70 hover:border-ink/40'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Tema</p>
            <div className="space-y-2">
              {themeOptions.map((option) => {
                const active = option.id === theme
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onThemeChange(option.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2 text-sm font-semibold transition ${
                      active
                        ? 'border-ink/40 bg-ink/5 text-ink'
                        : 'border-ink/10 bg-white/70 text-ink/70 hover:border-ink/40'
                    }`}
                  >
                    <span>{option.label}</span>
                    <span
                      className="h-5 w-5 rounded-full"
                      style={{ backgroundColor: option.swatch }}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
