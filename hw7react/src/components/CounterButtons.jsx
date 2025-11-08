import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext.js'
import LanguageContext from '../context/LanguageContext.js'

// Словарь для кнопок
const buttonTexts = {
  en: {
    increment: 'Increase (+)',
    decrement: 'Decrease (-)',
  },
  ru: {
    increment: 'Увеличить (+)',
    decrement: 'Уменьшить (-)',
  },
}

function CounterButtons() {
  const { increment, decrement } = useContext(CounterContext)
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <button onClick={increment}>{buttonTexts[language].increment}</button>
      <button onClick={decrement}>{buttonTexts[language].decrement}</button>
    </div>
  )
}

export default CounterButtons
