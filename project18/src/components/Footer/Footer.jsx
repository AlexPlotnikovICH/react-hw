import React from 'react'

import styles from './Footer.module.css'

import fbIcon from '../../assets/icons/f.svg'
import twIcon from '../../assets/icons/t.svg'
import instaIcon from '../../assets/icons/i.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Используем локальный контейнер */}
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerContacts}>
            <h3>Контакты</h3>
            <p>8 800 000 00 00</p>
            <p>emailexample@email.com</p>
          </div>

          <div className={styles.footerSocials}>
            <img width={24} height={24} src={fbIcon} alt='Facebook' />
            <img width={24} height={24} src={twIcon} alt='Twitter' />
            <img width={24} height={24} src={instaIcon} alt='Instagram' />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            2024 Сникер-магазин. Все права защищены
          </p>

          <div className={styles.subscribeBlock}>
            <span className={styles.subscribeLabel}>Введите свой email:</span>
            <input className={styles.subscribeInput} type='email' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
