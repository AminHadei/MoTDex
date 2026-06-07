const landingImages = import.meta.glob<string>(
  '~/assets/images/landing/**/*.{svg,png}',
  { eager: true, query: '?url', import: 'default' },
)

function landingKey(modulePath: string): string {
  const normalized = modulePath.replace(/\\/g, '/')
  const marker = '/landing/'
  const idx = normalized.indexOf(marker)
  return idx >= 0 ? normalized.slice(idx + marker.length) : normalized
}

export function useLandingImage(relativePath: string): string {
  const file = relativePath.replace(/^\//, '')
  for (const [key, url] of Object.entries(landingImages)) {
    if (landingKey(key) === file) {
      return url
    }
  }
  return ''
}
