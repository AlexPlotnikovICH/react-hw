import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

import logoIcon from '../../assets/icons/logo.svg'
import cartIcon from '../../assets/icons/bagCart.svg'
import cartFullIcon from '../../assets/icons/bag_filled.svg'

export const Header = () => {
  const navLinks = [
    { label: 'Main Page', path: '/' },
    { label: 'Categories', path: '/categories' },
    { label: 'All products', path: '/products' },
    { label: 'All sales', path: '/sales' },
  ]
  // поменять на 1 что б проверить сумку
  const cartCount = 0

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <img src={logoIcon} alt='Pet Shop Logo' />
      </Link>

      <nav className={styles.nav}>
        {navLinks.map(link => (
          <NavLink key={link.path} to={link.path} className={styles.link}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <Link to='/cart'>
          {/* 👇 смена иконки */}
          <img
            src={cartCount > 0 ? cartFullIcon : cartIcon}
            alt='Cart'
            className={styles.cartIcon}
          />
        </Link>
      </div>
    </header>
  )
}
