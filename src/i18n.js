import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales } from './constants'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: 'es',
    detection: {
      // lee primero de localStorage, luego de navigator
      order: ['localStorage', 'navigator'],
      // usa esta clave en localStorage (en lugar de 'i18nextLng')
      lookupLocalStorage: 'appLanguage',
      // guarda automáticamente en localStorage
      caches: ['localStorage']
    },
    interpolation: { escapeValue: false }
  })

export default i18n
