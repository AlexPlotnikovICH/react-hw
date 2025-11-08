import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext.js'
import LanguageContext from '../context/LanguageContext.js'

// Словарь
const texts = {
  en: 'Current count',
  ru: 'Текущий счет',
}

function CounterDisplay() {
  const { count } = useContext(CounterContext)
  const { language } = useContext(LanguageContext)

  return (
    <h2>
      {texts[language]}: {count}
    </h2>
  )
}

export default CounterDisplay
