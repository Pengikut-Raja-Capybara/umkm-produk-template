import type { SiteContent } from './schema'

export const site: SiteContent = {
  brand: {
    name: 'Raja Capybara Outfit',
    tagline: 'Kenyamanan Maksimal, Karakter Orisinal. Temukan Gaya Terbaikmu di Store Kami.',
    logo: '/assets/logo.jpg',
    heroImage: '/assets/hero.jpg',
  },
  cta: {
    primary: {
      label: 'Kunjungi Store',
      href: 'https://wa.me/6281234567890',
      message: 'Halo Raja Capybara Outfit, saya tertarik berkunjung ke store. Boleh info jadwal buka dan ketersediaan stok hari ini?',
    },
    secondary: {
      label: 'Eksplor Koleksi',
      href: '#catalog',
    },
  },
  categories: [
    { id: 'hoodie', label: 'Hoodie' },
    { id: 'tshirt', label: 'T-Shirt' },
    { id: 'jacket', label: 'Jacket' },
    { id: 'pants', label: 'Pants' },
    { id: 'caps', label: 'Caps' },
    { id: 'kids', label: 'Kids' },
  ],
  products: [
    {
      id: 'capybara-hoodie-sand',
      name: 'Capybara Hoodie Sand',
      desc: 'Material Premium Fleece 320 gsm dengan detail patch bordir presisi.',
      price: 'Rp 249.000',
      image: '/assets/products/capybara-hoodie-sand.jpg',
      category: 'hoodie',
      badge: 'Best Seller',
    },
    {
      id: 'capybara-hoodie-forest',
      name: 'Capybara Hoodie Forest',
      desc: 'Warna Forest Green yang ikonik. Hangat, lembut, dan tetap ringan dipakai.',
      price: 'Rp 259.000',
      image: '/assets/products/capybara-hoodie-forest.jpg',
      category: 'hoodie',
      badge: 'New',
    },
    {
      id: 'capybara-tee-cream',
      name: 'Capybara Tee Cream',
      desc: 'Cotton Combed 24s berkualitas tinggi dengan sentuhan grafis minimalis.',
      price: 'Rp 129.000',
      image: '/assets/products/capybara-tee-cream.jpg',
      category: 'tshirt',
      badge: 'Best Seller',
      waMessage: 'Halo, saya ingin memesan Capybara Tee Cream ukuran L.',
    },
    {
      id: 'capybara-tee-ink',
      name: 'Capybara Tee Ink',
      desc: 'Solid Black dengan sablon waterbase yang menyatu sempurna di kain.',
      price: 'Rp 135.000',
      image: '/assets/products/capybara-tee-ink.jpg',
      category: 'tshirt',
    },
    {
      id: 'capybara-coach-jacket',
      name: 'Capybara Coach Jacket',
      desc: 'Nilon premium anti-gerimis (water resistant). Outerwear harian paling andal.',
      price: 'Rp 289.000',
      image: '/assets/products/capybara-coach-jacket.jpg',
      category: 'jacket',
      badge: 'Bundling',
    },
    {
      id: 'capybara-bomber',
      name: 'Capybara Bomber Navy',
      desc: 'Siluet klasik dengan lining dalam yang lembut untuk proteksi ekstra.',
      price: 'Rp 319.000',
      image: '/assets/products/capybara-bomber.jpg',
      category: 'jacket',
    },
    {
      id: 'capybara-jogger',
      name: 'Capybara Jogger Stone',
      desc: 'Kombinasi kenyamanan fleece dan elastisitas karet premium yang awet.',
      price: 'Rp 189.000',
      image: '/assets/products/capybara-jogger.jpg',
      category: 'pants',
    },
    {
      id: 'capybara-cap-sand',
      name: 'Capybara Cap Sand',
      desc: 'Twill eksklusif dengan bordir logo klasik untuk melengkapi look harian.',
      price: 'Rp 89.000',
      image: '/assets/products/capybara-cap-sand.jpg',
      category: 'caps',
    },
    {
      id: 'capybara-kids-set',
      name: 'Capybara Kids Set',
      desc: 'Setelan nyaman dengan material ramah kulit untuk si kecil yang aktif.',
      price: 'Rp 149.000',
      image: '/assets/products/capybara-kids-set.jpg',
      category: 'kids',
      badge: 'Custom',
    },
  ],
  advantages: [
    {
      title: 'Fitting Langsung',
      desc: 'Pastikan bahan dan ukuran terasa pas sebelum Anda membawa pulang.',
      icon: 'cotton',
    },
    {
      title: 'Layanan Custom Nama',
      desc: 'Sentuhan personal melalui bordir nama tanpa proses yang rumit.',
      icon: 'needle',
    },
    {
      title: 'Kualitas Teruji',
      desc: 'Cek langsung detail jahitan dan kerapian finishing khas Raja Capybara.',
      icon: 'quality',
    },
    {
      title: 'Tanpa Menunggu',
      desc: 'Pilih, bayar, dan pakai. Tidak perlu menunggu kurir datang ke rumah.',
      icon: 'box',
    },
  ],
  brandStory: {
    title: 'Kualitas Workshop, Kenyamanan Sehari-hari',
    body: 'Raja Capybara Outfit berawal dari workshop kreatif di Kuvukiland. Kami berkomitmen menyajikan pakaian dengan potongan presisi, material breathable, dan detail bordir yang tangguh. Setiap koleksi diproduksi dalam jumlah terbatas untuk menjaga eksklusivitas dan standar kualitas terbaik bagi Anda.',
    badges: ['Local Craftsmanship', 'Authentic Design', 'Premium Fabric'],
  },
  orderSteps: [
    {
      title: 'Kunjungi Workshop kami',
      desc: 'Cek koleksi terbaru dan nikmati promo eksklusif khusus pengunjung store.',
    },
    {
      title: 'Pilih & Coba di Fitting Room',
      desc: 'Pastikan ukuran dan modelnya benar-benar sesuai dengan gaya Anda.',
    },
    {
      title: 'Transaksi Mudah',
      desc: 'Kami menerima berbagai metode pembayaran: Cash, Transfer, maupun E-Wallet.',
    },
    {
      title: 'Bawa Pulang Kebanggaan',
      desc: 'Outfit baru Anda siap menemani aktivitas hari ini juga.',
    },
  ],
  orderInfo: {
    shipping: 'Tersedia opsi pengambilan langsung di store atau pengiriman via ekspedisi tepercaya.',
    estimate: 'Belanja di store menjamin Anda mendapatkan produk secara instan.',
    returns: 'Layanan tukar size tersedia di store maksimal 3 hari (kondisi tag utuh).',
  },
  marketplace: [
    {
      label: 'Shopee',
      href: 'https://shopee.co.id/raja-capybara',
      icon: 'shopee',
    },
    {
      label: 'Tokopedia',
      href: 'https://tokopedia.com/raja-capybara',
      icon: 'tokopedia',
    },
    {
      label: 'Instagram Shop',
      href: 'https://instagram.com/raja.capybara',
      icon: 'instagram',
    },
  ],
  flashHighlight: [
    {
      title: 'Made by Order 2-3 Hari',
      desc: 'Kami menjaga kualitas dengan proses produksi yang teliti setelah pesanan masuk.',
    },
    {
      title: 'Edisi Terbatas',
      desc: 'Warna favorit sering terjual habis. Pastikan Anda mendapatkan milik Anda.',
    },
    {
      title: 'Custom Tanpa Batas',
      desc: 'Ekspresikan diri dengan request sablon atau bordir nama sesuai keinginan.',
    },
  ],
  promo: {
    headline: 'Privilese Belanja Langsung: Diskon 15%',
    desc: 'Nikmati potongan harga khusus store dan promo bundling menarik untuk kombinasi Hoodie + Cap.',
    badge: 'Bundling Hemat',
    ctaLabel: 'Klaim Promo Store',
    waMessage: 'Halo, saya ingin menanyakan info promo bundling Hoodie + Cap untuk pembelian di store.',
  },
  faq: [
    {
      question: 'Apakah produk bisa ditukar jika ukuran tidak pas?',
      answer: 'Tentu. Penukaran bisa dilakukan di store maksimal 3 hari selama tag masih terpasang dan produk belum dicuci.',
    },
    {
      question: 'Bolehkah saya mencoba produknya terlebih dahulu?',
      answer: 'Sangat disarankan. Kami menyediakan fitting room yang nyaman untuk memastikan kepuasan Anda.',
    },
    {
      question: 'Bagaimana dengan ketersediaan stok di store?',
      answer: 'Kami memperbarui stok secara mingguan. Disarankan datang lebih awal untuk mendapatkan varian warna favorit.',
    },
    {
      question: 'Apakah ada jaminan kualitas untuk jahitan?',
      answer: 'Setiap produk dilindungi garansi jahitan selama 7 hari sejak tanggal pembelian.',
    },
  ],
  testimonials: [
    {
      name: 'Dinda F',
      location: 'Kuvukiland',
      quote: 'Store-nya sangat estetik dan nyaman. Bisa fitting sepuasnya sampai dapat yang pas. Worth it banget!',
      rating: 5,
    },
    {
      name: 'Rafly K',
      location: 'Jakarta',
      quote: 'Sengaja mampir pas ke Kuvukiland. Stoknya lengkap dan tim di store sangat membantu.',
      rating: 5,
    },
    {
      name: 'Wulan R',
      location: 'Surabaya',
      quote: 'Paling suka layanan custom namanya, prosesnya cepat dan hasilnya rapi sekali.',
      rating: 4,
    },
  ],
  contact: {
    whatsapp: 'https://wa.me/6281234567890',
    phone: '+62 812-3456-7890',
    email: 'hello@rajacapybara.com',
    instagram: 'https://instagram.com/raja.capybara',
    tiktok: 'https://tiktok.com/@raja.capybara',
    address: 'Jl. Merdeka No. 88, Kuvukiland (Area Alun-Alun)',
    hours: 'Senin - Sabtu: 10:00 - 20:00 | Minggu: 10:00 - 17:00',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63308.07791374615!2d107.576051!3d-6.917464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64b0d3f2f63%3A0x9baf2e8bbef1aa6f!2sAlun%20Alun%20Bandung!5e0!3m2!1sid!2sid!4v1739570000000',
  },
  features: {
    showMarketplace: true,
    showTestimonials: true,
    showFlashHighlight: true,
    enableCatalogFilter: true,
    showFloatingWA: true,
  },
  template: {
    layout: 'A',
    theme: 'capybara-sand',
  },
  seo: {
    title: 'Raja Capybara Outfit | Eksklusif Streetwear & Lokal Brand Kuvukiland',
    description: 'Brand fashion lokal Kuvukiland dengan spesialisasi hoodie, t-shirt, dan jacket premium. Melayani custom bordir nama dan fitting langsung di store.',
    url: 'https://umkm-capybara.netlify.app',
    ogImage: '/assets/og.jpg',
    keywords: [
      'toko pakaian kuvukiland',
      'brand lokal kuvukiland',
      'streetwear premium kuvukiland',
      'hoodie custom kuvukiland',
      't-shirt cotton combed kuvukiland',
      'fashion pria kuvukiland',
    ],
  },
}