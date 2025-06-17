import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const langs = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'br', label: 'Português', flag: '🇧🇷' },
  { code: 'py', label: 'Guaraní', flag: '🇵🇾' },
]

export default function Translate() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef()

  // Cerrar al click fuera
  useEffect(() => {
    const onClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // El idioma actual
  const current = langs.find(l => l.code === i18n.language) || langs[0]

  return (
    <div ref={ref} className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-12 h-12 rounded-full bg-[#0e0e10] text-[#d9ecff] border border-gray-600
                   flex items-center justify-center shadow-lg focus:outline-none
                   hover:bg-[#1a1a1f] active:scale-95 transition-all duration-200
                   touch-manipulation select-none"
        aria-label="Seleccionar idioma"
      >
        <span className="text-2xl pointer-events-none">{current.flag}</span>
      </button>

      {open && (
        <ul className="absolute bottom-16 right-0 w-40 bg-[#0e0e10] text-[#d9ecff] border border-gray-600
                       rounded-md shadow-lg overflow-hidden animate-in fade-in-0 slide-in-from-bottom-2 duration-200">
          {langs.map(({ code, label, flag }) => (
            <li key={code}>
              <button
                onClick={() => {
                  i18n.changeLanguage(code)
                  setOpen(false)
                }}
                className="w-full text-left px-4 py-3 flex items-center
                           hover:bg-[#282732] active:bg-[#33303f] transition-colors
                           touch-manipulation select-none min-h-[44px]"
              >
                <span className="text-xl mr-3 pointer-events-none">{flag}</span>
                <span className="pointer-events-none">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}