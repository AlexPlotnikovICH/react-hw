import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='MECK Logo' />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='#'>Главная</a>
          </li>
          <li>
            <a href='#'>Музыка</a>
          </li>
          <li>
            <a href='#'>Сообщества</a>
          </li>
          <li>
            <a href='#'>Друзья</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
