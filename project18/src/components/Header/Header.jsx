import React from 'react'
// 1. Меняем импорт на NavLink
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  // "Если активно - верни класс active, иначе пусто"
  const activeLinkClass = ({ isActive }) => (isActive ? styles.active : '')

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        {/* Логотип всегда ведет на главную, подсветка ему не нужна */}
        <Link to='/'>
          <div className={styles.headerLeft}>
            <h3>Сникер - магазин</h3>
          </div>
        </Link>

        <ul className={styles.headerRight}>
          {/* 1. ГЛАВНАЯ */}
          <NavLink to='/' className={activeLinkClass}>
            <li>Главная</li>
          </NavLink>

          {/* 2. КОРЗИНА */}
          {/* Предполагаем, что это тоже отдельная страница /cart */}
          <NavLink to='/cart' className={activeLinkClass}>
            <li>Корзина</li>
          </NavLink>

          {/* 3. КОНТАКТЫ */}
          <NavLink to='/contacts' className={activeLinkClass}>
            <li>Контакты</li>
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default Header
