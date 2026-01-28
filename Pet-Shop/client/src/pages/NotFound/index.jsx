import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import errorImgFull from '../../assets/images/error404_full.png'

export const NotFound = () => {
  return (
    // 1. Внешняя секция
    <section className={styles.section}>
      {/* 2. Глобальный контейнер */}
      <div className='container'>
        {/* 3. Обертка контента 404 */}
        <div className={styles.contentWrapper}>
          <div className={styles.errorWrapper}>
            <img
              src={errorImgFull}
              alt='404 Not Found'
              className={styles.fullImage}
            />
          </div>

          <div className={styles.textWrapper}>
            <h1 className='page-title'>Page Not Found</h1>

            <p className={styles.description}>
              We’re sorry, the page you requested could not be found. Please go
              back to the homepage.
            </p>

            <Link to='/' className={styles.homeBtn}>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
