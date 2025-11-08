import React, { useContext } from 'react'
import ThemeContext from './ThemeContext.js'
import LanguageContext from './LanguageContext.js'

// Словарь для компонента темы
const texts = {
  en: {
    currentTheme: 'Current theme',
    toggleButton: 'Toggle Theme',
  },
  ru: {
    currentTheme: 'Текущая тема',
    toggleButton: 'Переключить тему',
  },
}

function DisplayTheme() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <h2>
        {texts[language].currentTheme}: {theme}
      </h2>
      <button onClick={handleToggleTheme}>
        {texts[language].toggleButton}
      </button>
    </div>
  )
}

export default DisplayTheme
