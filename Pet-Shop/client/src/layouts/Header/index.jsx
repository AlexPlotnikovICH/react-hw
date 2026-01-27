import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.svg'
import cartIcon from '../../assets/icons/bagCart.svg'

export const Header = () => {
  const location = useLocation()
  const cartList = useSelector(state => state.cart.list)

  //логика подсчета
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

      {/* КОРЗИНА */}
      <Link to='/cart' className={styles.cartIconWrapper}>
        <img src={cartIcon} alt='Cart' className={styles.cartIconImg} />
        {/* Если товаров больше 0, показываем кружок с цифрой */}
        {totalCount > 0 && (
          <span className={styles.cartCount}>{totalCount}</span>
        )}
      </Link>
    </header>
  )
}
