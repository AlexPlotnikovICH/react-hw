import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext.js'
const texts = {
  en: {
    title: 'Hello!',
    description: 'This text is in English.',
  },
  ru: {
    title: 'Привет!',
    description: 'Этот текст на русском.',
  },
}

function TextComponent() {
  const { language } = useContext(LanguageContext)

  const currentText = texts[language]

  return (
    <div>
      <h3>{currentText.title}</h3>
      <p>{currentText.description}</p>
    </div>
  )
}

export default TextComponent
