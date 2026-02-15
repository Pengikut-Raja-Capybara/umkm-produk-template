import type { LayoutId } from '../content/schema'

export type LayoutSectionId =
  | 'Navbar'
  | 'HeroProduct'
  | 'CategoryChips'
  | 'FeaturedProducts'
  | 'BestSeller'
  | 'PromoBanner'
  | 'FlashHighlight'
  | 'Advantages'
  | 'BrandStory'
  | 'OrderSteps'
  | 'Testimonials'
  | 'FAQ'
  | 'MarketplaceLinks'
  | 'ContactQuick'
  | 'Footer'

export const layoutRegistry: Record<LayoutId, LayoutSectionId[]> = {
  A: [
    'HeroProduct',
    'CategoryChips',
    'FeaturedProducts',
    'Advantages',
    'BrandStory',
    'Testimonials',
    'OrderSteps',
    'MarketplaceLinks',
    'Footer',
  ],
  B: [
    'PromoBanner',
    'HeroProduct',
    'BestSeller',
    'FlashHighlight',
    'Testimonials',
    'FAQ',
    'ContactQuick',
    'Footer',
  ],
  C: [
    'HeroProduct',
    'CategoryChips',
    'FeaturedProducts',
    'OrderSteps',
    'Footer',
  ],
  D: [
    'HeroProduct',
    'BestSeller',
    'CategoryChips',
    'OrderSteps',
    'FAQ',
    'ContactQuick',
    'Footer',
  ],
  E: ['HeroProduct', 'FeaturedProducts', 'ContactQuick', 'Footer'],
}

export const layoutConfig: Record<LayoutId, {
  featuredLimit: number
  featuredVariant: 'grid' | 'masonry'
  showOrderInfo: boolean
  showTestimonialSummary: boolean
  showFloatingWA: boolean
  heroVariant: 'default' | 'minimal'
}> = {
  A: {
    featuredLimit: 8,
    featuredVariant: 'grid',
    showOrderInfo: false,
    showTestimonialSummary: false,
    showFloatingWA: false,
    heroVariant: 'default',
  },
  B: {
    featuredLimit: 8,
    featuredVariant: 'grid',
    showOrderInfo: false,
    showTestimonialSummary: true,
    showFloatingWA: true,
    heroVariant: 'default',
  },
  C: {
    featuredLimit: 12,
    featuredVariant: 'masonry',
    showOrderInfo: true,
    showTestimonialSummary: false,
    showFloatingWA: false,
    heroVariant: 'minimal',
  },
  D: {
    featuredLimit: 6,
    featuredVariant: 'grid',
    showOrderInfo: false,
    showTestimonialSummary: false,
    showFloatingWA: false,
    heroVariant: 'default',
  },
  E: {
    featuredLimit: 6,
    featuredVariant: 'grid',
    showOrderInfo: false,
    showTestimonialSummary: false,
    showFloatingWA: false,
    heroVariant: 'minimal',
  },
}
