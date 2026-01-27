import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux' // 1. Импорт хука для данных
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.svg'
import cartEmpty from '../../assets/icons/bagCart.svg' // Пустая корзина
import cartFilled from '../../assets/icons/bag_filled.svg' // Полная корзина

export const Header = () => {
  const location = useLocation()

  // 2. Достаем список товаров из Redux
  const cartList = useSelector(state => state.cart.list)

  // 3. Считаем общее количество штук (чтобы иконка загоралась даже от 1 товара)
  const totalCount = cartList.reduce((sum, item) => sum + item.count, 0)

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
        <img src={totalCount > 0 ? cartFilled : cartEmpty} alt='Cart' />
      </Link>
    </header>
  )
}
