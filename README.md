# UMKM Produk Template

Template website statis untuk UMKM produk (retail, fashion, kerajinan) dengan React + Tailwind. Konten diatur lewat satu file data dan mendukung layout A-E.

## Struktur

- `src/content/site.ts` - Data utama (nama brand, produk, CTA, FAQ, dll)
- `src/content/schema.ts` - Tipe data
- `src/layouts/registry.ts` - Mapping layout A-E
- `src/layouts/LayoutRenderer.tsx` - Renderer layout
- `src/sections/*` - Section layout
- `src/components/*` - Komponen UI
- `src/styles/globals.css` - Global style + theme

## Mulai

```bash
npm install
npm run dev
```

## Cara edit konten

Ubah data di `src/content/site.ts`.

- Ganti `brand`, `cta`, dan `products` sesuai katalog.
- Atur `template.layout` ke `A`, `B`, `C`, `D`, atau `E`.
- Upload aset ke `public/assets` sesuai path di data.

## Layout

- **A**: clean compro produk
- **B**: sales/conversion
- **C**: catalog visual (masonry)
- **D**: one page catalog
- **E**: minimal catalog

## Deploy GitHub Pages

Repositori ini sudah memakai `base` untuk GitHub Pages di `vite.config.ts`.

```bash
npm run build
```
