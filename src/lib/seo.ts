import type { Seo } from '../content/schema'

export function applySeo(seo: Seo) {
  document.title = seo.title

  const description = ensureMeta('description', 'name')
  description.setAttribute('content', seo.description)

  const ogTitle = ensureMeta('og:title', 'property')
  ogTitle.setAttribute('content', seo.title)

  const ogDescription = ensureMeta('og:description', 'property')
  ogDescription.setAttribute('content', seo.description)

  const ogImage = ensureMeta('og:image', 'property')
  ogImage.setAttribute('content', seo.ogImage)

  const ogUrl = ensureMeta('og:url', 'property')
  ogUrl.setAttribute('content', seo.url)

  if (seo.keywords && seo.keywords.length) {
    const keywords = ensureMeta('keywords', 'name')
    keywords.setAttribute('content', seo.keywords.join(', '))
  }
}

function ensureMeta(name: string, attr: 'name' | 'property') {
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  return element
}
