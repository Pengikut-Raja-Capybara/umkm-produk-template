export function formatPrice(value: number | string) {
  if (typeof value === 'string') {
    return value
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatDiscountLabel(discount: number) {
  return `${discount}% OFF`
}
