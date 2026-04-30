import es from './es.json'
import en from './en.json'
import eu from './eu.json'

const translations = { es, en, eu }

export const getLocale = (url: URL | string): string => {
  const pathname = typeof url === 'string' ? url : url.pathname
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/eu')) return 'eu'
  return 'es'
}

export const t = (key: string, locale: string): string => {
  const trans = translations[locale as keyof typeof translations] || translations.es
  return trans[key as keyof typeof trans] || key
}
