import React, { useEffect, useState } from 'react'

interface LanguageSelectorProps {
  currentLocale: string
}

export default function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'eu', name: 'EU' }
  ]

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname
    
    // Remove locale prefix if exists - check for pattern /lang/ or /lang
    let basePath = currentPath
    const langPrefixes = ['/en/', '/eu/', '/es/']
    
    for (const prefix of langPrefixes) {
      if (currentPath.startsWith(prefix)) {
        basePath = currentPath.slice(prefix.length - 1) // -1 to keep the leading /
        break
      }
    }

    // Ensure basePath starts with /
    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath
    }
    
    // If basePath is just a lang prefix without slash, make it root
    if (basePath === '/en' || basePath === '/eu' || basePath === '/es') {
      basePath = '/'
    }

    // Build new path
    let newPath: string
    if (locale === 'es') {
      // Spanish is root, no prefix
      newPath = basePath === '/' ? '/' : basePath
    } else {
      // Other languages get prefix
      newPath = `/${locale}${basePath === '/' ? '' : basePath}`
    }

    window.location.href = newPath
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
            currentLocale === lang.code
              ? 'bg-blue-600 text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
}
