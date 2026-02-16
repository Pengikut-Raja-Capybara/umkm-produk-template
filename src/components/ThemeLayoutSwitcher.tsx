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
  { id: 'capybara-sand', label: '🐁 Citrus (Orange)', swatch: '#f2b872' },
  { id: 'mint-stone', label: '🌿 Mint', swatch: '#6fd1b8' },
  { id: 'navy-cream', label: '🌊 Navy', swatch: '#7aa6f8' },
  { id: 'terracotta-rose', label: '🌋 Terracotta', swatch: '#d97760' },
  { id: 'forest-sage', label: '🌲 Forest', swatch: '#4a7c59' },
  { id: 'charcoal-gold', label: '🖤 Gold', swatch: '#d4af37' },
  { id: 'lavender-cream', label: '💜 Lavender', swatch: '#9b82c9' },
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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-orange-500 shadow-lg backdrop-blur transition hover:shadow-xl"
        aria-expanded={open}
        aria-label="Buka pilihan layout dan tema"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24" />
        </svg>
      </button>
      {open ? (
        <div className="mt-3 w-80 space-y-4 rounded-2xl border border-ink/10 bg-white/95 p-5 shadow-xl backdrop-blur">
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-ink/60">Layout</label>
              <select
                value={layout}
                onChange={(e) => onLayoutChange(e.target.value as LayoutId)}
                className="mt-1.5 w-full appearance-none rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-medium text-ink transition hover:border-ink/30 focus:border-ink/50 focus:outline-none"
              >
                {layoutOptions.map((option) => (
                  <option key={option} value={option}>
                    Layout {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-ink/60">Theme</label>
              <select
                value={theme}
                onChange={(e) => onThemeChange(e.target.value as ThemeId)}
                className="mt-1.5 w-full appearance-none rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-medium text-ink transition hover:border-ink/30 focus:border-ink/50 focus:outline-none"
              >
                {themeOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
