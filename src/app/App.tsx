import { useEffect, useState } from 'react'
import { site } from '../content/site'
import type { LayoutId, ThemeId } from '../content/schema'
import { LayoutRenderer } from '../layouts/LayoutRenderer.tsx'
import { ThemeLayoutSwitcher } from '../components/ThemeLayoutSwitcher'
import { applySeo } from '../lib/seo.ts'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLayout, setActiveLayout] = useState<LayoutId>(site.template.layout)
  const [activeTheme, setActiveTheme] = useState<ThemeId>(site.template.theme)

  useEffect(() => {
    applySeo(site.seo)
  }, [])

  return (
    <>
      <LayoutRenderer
        content={site}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        layoutOverride={activeLayout}
        themeOverride={activeTheme}
      />
      <ThemeLayoutSwitcher
        layout={activeLayout}
        theme={activeTheme}
        onLayoutChange={setActiveLayout}
        onThemeChange={setActiveTheme}
      />
    </>
  )
}
