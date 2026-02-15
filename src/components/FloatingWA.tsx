import { Button } from './Button'
import { buildWaLink } from '../lib/wa.ts'

interface FloatingWAProps {
  href: string
  label: string
}

export function FloatingWA({ href, label }: FloatingWAProps) {
  const link = buildWaLink(href, 'Halo, saya mau tanya produk.')

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button href={link} size="sm" className="shadow-lg">
        {label}
      </Button>
    </div>
  )
}
