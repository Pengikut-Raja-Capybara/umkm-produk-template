export type LayoutId = 'A' | 'B' | 'C' | 'D' | 'E'

export type ThemeId = 'capybara-sand' | 'mint-stone' | 'navy-cream'

export interface Brand {
  name: string
  tagline: string
  logo: string
  heroImage: string
}

export interface CtaLink {
  label: string
  href: string
  message?: string
}

export interface Cta {
  primary: CtaLink
  secondary: CtaLink
}

export interface Category {
  id: string
  label: string
}

export type ProductBadge = 'Best Seller' | 'New' | 'Custom' | 'Bundling'

export interface Product {
  id: string
  name: string
  desc: string
  price: string
  image: string
  category: string
  badge?: ProductBadge
  waMessage?: string
}

export interface Advantage {
  title: string
  desc: string
  icon?: string
}

export interface OrderStep {
  title: string
  desc: string
}

export interface MarketplaceLink {
  label: string
  href: string
  icon?: string
}

export interface FlashHighlightItem {
  title: string
  desc: string
}

export interface Promo {
  headline: string
  desc: string
  badge?: string
  ctaLabel: string
  waMessage: string
}

export interface BrandStory {
  title: string
  body: string
  badges: string[]
}

export interface OrderInfo {
  shipping: string
  estimate: string
  returns?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
}

export interface Contact {
  whatsapp: string
  phone?: string
  email?: string
  instagram?: string
  tiktok?: string
  address?: string
  hours?: string
  mapEmbedUrl?: string
}

export interface Features {
  showMarketplace: boolean
  showTestimonials: boolean
  showFlashHighlight: boolean
  enableCatalogFilter: boolean
  showFloatingWA: boolean
}

export interface Template {
  layout: LayoutId
  theme: ThemeId
}

export interface Seo {
  title: string
  description: string
  url: string
  ogImage: string
  keywords?: string[]
}

export interface SiteContent {
  brand: Brand
  cta: Cta
  categories: Category[]
  products: Product[]
  advantages: Advantage[]
  brandStory: BrandStory
  orderSteps: OrderStep[]
  orderInfo: OrderInfo
  marketplace: MarketplaceLink[]
  flashHighlight: FlashHighlightItem[]
  promo: Promo
  faq: FaqItem[]
  testimonials: Testimonial[]
  contact: Contact
  features: Features
  template: Template
  seo: Seo
}
