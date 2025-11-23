import React from 'react'
import CatImage from './components/CatImage'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Генератор Котофоток</h1>
      <CatImage />
    </div>
  )
}

export default App
