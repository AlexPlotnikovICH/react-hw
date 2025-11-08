import { useState } from 'react'

import ThemeContext from './ThemeContext.js'
import CounterContext from './CounterContext.js'
import LanguageContext from './LanguageContext.js'

export default function AppProvider({ children }) {
  // --- Логика состояния для Темы ---
  const [theme, setTheme] = useState('light')
  const themeValue = { theme, setTheme }

  // --- Логика состояния для Счетчика ---
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const counterValue = { count, increment, decrement }

  // --- Логика состояния для Языка ---
  const [language, setLanguage] = useState('en')
  const languageValue = { language, setLanguage }

  return (
    <ThemeContext.Provider value={themeValue}>
      <CounterContext.Provider value={counterValue}>
        <LanguageContext.Provider value={languageValue}>
          {children}
        </LanguageContext.Provider>
      </CounterContext.Provider>
    </ThemeContext.Provider>
  )
}
