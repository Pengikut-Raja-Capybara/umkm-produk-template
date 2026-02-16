/**
 * Get the correct asset path considering the base URL
 * Handles both dev (/assets/...) and GitHub Pages (/umkm-produk-template/assets/...)
 */
export function getAssetPath(path: string): string {
  if (!path) return path

  // If path is absolute and starts with /assets/, prepend the base URL
  if (path.startsWith('/assets/')) {
    return import.meta.env.BASE_URL + path.slice(1)
  }

  // If already has base URL or is relative, return as is
  return path
}
