import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.svg'
import cartIcon from '../../assets/icons/bagCart.svg'

export const Header = () => {
  const location = useLocation()

  // Логика: если не главная, добавляем полоску
  const headerClassName =
    location.pathname === '/'
      ? styles.header
      : `${styles.header} ${styles.headerBorder}`

  return (
    <header className={headerClassName}>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt='Logo' />
      </Link>

      <nav className={styles.nav}>
        <Link to='/' className={styles.link}>
          Main Page
        </Link>

        <Link to='/categories' className={styles.link}>
          Categories
        </Link>
        <Link to='/products' className={styles.link}>
          All products
        </Link>
        <Link to='/sales' className={styles.link}>
          All sales
        </Link>
      </nav>

      <Link to='/cart' className={styles.cartIcon}>
        <img src={cartIcon} alt='Cart' />
      </Link>
    </header>
  )
}
