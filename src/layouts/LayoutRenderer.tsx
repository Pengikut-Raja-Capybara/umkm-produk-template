import type { SiteContent } from '../content/schema'
import { layoutConfig, layoutRegistry, type LayoutSectionId } from './registry'
import { Navbar } from '../sections/Navbar.tsx'
import { HeroProduct } from '../sections/HeroProduct.tsx'
import { CategoryChips } from '../sections/CategoryChips.tsx'
import { FeaturedProducts } from '../sections/FeaturedProducts.tsx'
import { BestSeller } from '../sections/BestSeller.tsx'
import { PromoBanner } from '../sections/PromoBanner.tsx'
import { FlashHighlight } from '../sections/FlashHighlight.tsx'
import { Advantages } from '../sections/Advantages.tsx'
import { BrandStory } from '../sections/BrandStory.tsx'
import { OrderSteps } from '../sections/OrderSteps.tsx'
import { Testimonials } from '../sections/Testimonials.tsx'
import { FAQ } from '../sections/FAQ.tsx'
import { MarketplaceLinks } from '../sections/MarketplaceLinks.tsx'
import { ContactQuick } from '../sections/ContactQuick.tsx'
import { Footer } from '../sections/Footer.tsx'
import { FloatingWA } from '../components/FloatingWA.tsx'

interface LayoutRendererProps {
  content: SiteContent
  activeCategory: string
  onCategoryChange: (value: string) => void
  layoutOverride?: SiteContent['template']['layout']
  themeOverride?: SiteContent['template']['theme']
}

export function LayoutRenderer({
  content,
  activeCategory,
  onCategoryChange,
  layoutOverride,
  themeOverride,
}: LayoutRendererProps) {
  const selectedLayout = layoutOverride ?? content.template.layout
  const selectedTheme = themeOverride ?? content.template.theme
  const config = layoutConfig[selectedLayout]
  const sections = layoutRegistry[selectedLayout]
  const hasFeatured = sections.includes('FeaturedProducts')
  const hasBestSeller = sections.includes('BestSeller')
  const hasCategoryChips = sections.includes('CategoryChips')
  const filteredProducts =
    activeCategory === 'all'
      ? content.products
      : content.products.filter((product) => product.category === activeCategory)

  const featuredProducts = filteredProducts.slice(0, config.featuredLimit)
  const bestSellerProducts = content.products.filter(
    (product) => product.badge === 'Best Seller',
  )
  const bestSellerBase = bestSellerProducts.length ? bestSellerProducts : content.products
  const shouldFilterBestSeller = hasBestSeller && hasCategoryChips && !hasFeatured
  const bestSellerFiltered = shouldFilterBestSeller
    ? bestSellerBase.filter((product) =>
        activeCategory === 'all' ? true : product.category === activeCategory,
      )
    : bestSellerBase
  const bestSellerFallback = bestSellerFiltered.length ? bestSellerFiltered : bestSellerBase.slice(0, 6)

  const heroSecondaryHref = hasFeatured
    ? '#catalog'
    : hasBestSeller
      ? '#bestseller'
      : sections.includes('OrderSteps')
        ? '#order'
        : sections.includes('ContactQuick')
          ? '#contact'
          : content.cta.secondary.href

  const renderSection = (sectionId: LayoutSectionId) => {
    switch (sectionId) {
      case 'Navbar':
        return <Navbar brand={content.brand} availableSections={sections} />
      case 'HeroProduct':
        return (
          <HeroProduct
            brand={content.brand}
            cta={content.cta}
            secondaryHref={heroSecondaryHref}
            variant={config.heroVariant}
          />
        )
      case 'CategoryChips':
        return (
          <CategoryChips
            enabled={content.features.enableCatalogFilter}
            categories={content.categories}
            activeCategory={activeCategory}
            onChange={onCategoryChange}
          />
        )
      case 'FeaturedProducts':
        return (
          <FeaturedProducts
            id="catalog"
            title="Katalog Pilihan"
            subtitle="Temukan item favorit yang paling sering diburu."
            products={featuredProducts}
            variant={config.featuredVariant}
            brandName={content.brand.name}
            waNumber={content.contact.whatsapp}
          />
        )
      case 'BestSeller':
        return (
          <BestSeller
            id="bestseller"
            products={bestSellerFallback}
            brandName={content.brand.name}
            waNumber={content.contact.whatsapp}
          />
        )
      case 'PromoBanner':
        return (
          <PromoBanner id="promo" promo={content.promo} waNumber={content.contact.whatsapp} />
        )
      case 'FlashHighlight':
        return content.features.showFlashHighlight ? (
          <FlashHighlight items={content.flashHighlight} />
        ) : null
      case 'Advantages':
        return <Advantages items={content.advantages} />
      case 'BrandStory':
        return <BrandStory story={content.brandStory} />
      case 'OrderSteps':
        return (
          <OrderSteps
            id="order"
            steps={content.orderSteps}
            info={config.showOrderInfo ? content.orderInfo : undefined}
          />
        )
      case 'Testimonials':
        return content.features.showTestimonials ? (
          <Testimonials
            items={content.testimonials}
            showSummary={config.showTestimonialSummary}
          />
        ) : null
      case 'FAQ':
        return <FAQ id="faq" items={content.faq} />
      case 'MarketplaceLinks':
        return content.features.showMarketplace ? (
          <MarketplaceLinks items={content.marketplace} />
        ) : null
      case 'ContactQuick':
        return <ContactQuick id="contact" contact={content.contact} />
      case 'Footer':
        return <Footer brand={content.brand} contact={content.contact} />
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen bg-surface text-ink theme-${selectedTheme}`}>
      {sections.map((section) => (
        <div key={section}>{renderSection(section)}</div>
      ))}
      {content.features.showFloatingWA && config.showFloatingWA ? (
        <FloatingWA href={content.contact.whatsapp} label="Chat WhatsApp" />
      ) : null}
    </div>
  )
}
