import { useState } from 'react'

// ВСЕ ТРИ контекста
import ThemeContext from './context/ThemeContext.js'
import CounterContext from './context/CounterContext.js'
import LanguageContext from './context/LanguageContext.js'

// ВСЕ дочерние компоненты
import DisplayTheme from './context/DispleyTheme.jsx'
import CounterDisplay from './components/CounterDisplay.jsx'
import CounterButtons from './components/CounterButtons.jsx'
import TextComponent from './components/TextComponent.jsx'
import LanguageSwitcher from './components/LanguageSwitcher.jsx'

import './App.css'

const titles = {
  en: {
    language: 'Language Block',
    welcome: 'Welcome to the App!',
    counter: 'Counter App with Context',
  },
  ru: {
    language: 'Языковой блок',
    welcome: 'Добро пожаловать в приложение!',
    counter: 'Приложение-Счетчик с Context',
  },
}

function App() {
  // --- Мозг Темы ---
  const [theme, setTheme] = useState('dark')
  const themeValue = { theme, setTheme }

  // --- "Мозг" Счетчика ---
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const counterValue = { count, increment, decrement }

  // --- Мозг Языка ---
  const [language, setLanguage] = useState('en')
  const languageValue = { language, setLanguage }

  // 4. "Матрешка" из ТРЕХ Провайдеров
  return (
    <ThemeContext.Provider value={themeValue}>
      <CounterContext.Provider value={counterValue}>
        <LanguageContext.Provider value={languageValue}>
          <div className={`app-wrapper ${theme}`}>
            <div className='widget-card'>
              <h1>{titles[language].language}</h1>
              <TextComponent />
              <LanguageSwitcher />
            </div>

            <div className='widget-card'>
              <h1>{titles[language].welcome}</h1>
              <DisplayTheme />
            </div>

            <div className='widget-card'>
              <h1>{titles[language].counter}</h1>
              <CounterDisplay />
              <CounterButtons />
            </div>
          </div>
        </LanguageContext.Provider>
      </CounterContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
