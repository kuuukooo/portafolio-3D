import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useLanguage(defaultLang = 'es') {
  const { i18n } = useTranslation()

  // Cambiar idioma y guardarlo
  const setLanguage = useCallback(
    (lang) => {
      i18n.changeLanguage(lang)
      localStorage.setItem('appLanguage', lang)
    },
    [i18n]
  )

  // Al montar, leemos y aplicamos el idioma guardado
  useEffect(() => {
    const saved = localStorage.getItem('appLanguage')
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved)
    } else if (!saved) {
      i18n.changeLanguage(defaultLang)
      localStorage.setItem('appLanguage', defaultLang)
    }
  }, [i18n, defaultLang])

  return [i18n.language, setLanguage]
}
