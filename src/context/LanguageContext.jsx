import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('fg-lang') || 'rust'
  })

  const setLanguage = (lang) => {
    setLanguageState(lang)
    localStorage.setItem('fg-lang', lang)
  }

  useEffect(() => {
    const root = document.documentElement
    if (language === 'python') {
      root.classList.add('lang-python')
    } else {
      root.classList.remove('lang-python')
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
