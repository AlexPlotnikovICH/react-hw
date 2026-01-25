import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

export const Breadcrumbs = ({ title }) => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.btn}>
        Main Page
      </Link>

      <div className={styles.line}></div>

      {title ? (
        <Link to='/categories' className={styles.btn}>
          Categories
        </Link>
      ) : (
        <div className={`${styles.btn} ${styles.active}`}>Categories</div>
      )}

      {title && (
        <>
          <div className={styles.line}></div>
          <div className={`${styles.btn} ${styles.active}`}>{title}</div>
        </>
      )}
    </div>
  )
}
