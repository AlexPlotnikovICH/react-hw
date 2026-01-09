import React from 'react'
import styles from './Contacts.module.css'

import snapchatIcon from '../assets/icons/social-snapchat.svg'
import facebookIcon from '../assets/icons/social-facebook.svg'
import xIcon from '../assets/icons/social-x.svg'

function Contacts() {
  return (
    <div className={styles.content}>
      <h1 className='page-title'>Контакты</h1>

      <div className={styles.infoBlock}>
        <p>8 800 000 00 00</p>
        <p>emailexample@gmail.com</p>
      </div>

      <div className={styles.wrapper}>
        {/* ЛЕВАЯ ЧАСТЬ: Форма */}
        <div className={styles.formBlock}>
          {/* Группа полей в одну строку */}
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type='email'
              placeholder='Ваш email'
            />
            <input
              className={styles.input}
              type='text'
              placeholder='Ваше имя'
            />
          </div>

          <textarea
            className={styles.textarea}
            placeholder='Введите сообщение'
          ></textarea>

          <button className={styles.submitBtn}>Отправить</button>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Соцсети */}
        <div className={styles.socialBlock}>
          <span className={styles.socialTitle}>Найдите нас:</span>

          <div className={styles.socialIcons}>
            <img
              className={styles.socialIcon}
              src={snapchatIcon}
              alt='Snapchat'
            />
            <img
              className={styles.socialIcon}
              src={facebookIcon}
              alt='Facebook'
            />
            <img className={styles.socialIcon} src={xIcon} alt='X' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
