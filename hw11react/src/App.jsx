import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './components/HomePage'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'

import styles from './App.module.css'

function App() {
  // Функция для классов NavLink (чтобы было красиво и модульно)
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.activeLink}` : styles.link

  return (
    // 2. Заменяем style={{...}} на className={styles.name}
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to='/' className={getLinkClass}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to='/articles' className={getLinkClass}>
              Статьи
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={{ padding: '20px' }}>
        {' '}
        {/* Контейнер для контента страниц */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/articles' element={<ArticlesList />} />
          <Route path='/articles/:id' element={<SingleArticle />} />
          <Route path='*' element={<h2>Страница не найдена</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
