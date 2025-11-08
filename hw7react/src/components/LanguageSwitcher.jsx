import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext.js'

const buttonTexts = {
  en: 'Switch to Russian',
  ru: 'Переключить на Английский',
}

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext)

  const handleToggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'))
  }

  return <button onClick={handleToggleLanguage}>{buttonTexts[language]}</button>
}

export default LanguageSwitcher
