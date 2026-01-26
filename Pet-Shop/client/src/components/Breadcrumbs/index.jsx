import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

// Добавляем = [] — это защита от пустоты
export const Breadcrumbs = ({ links = [] }) => {
  return (
    <div className={styles.container}>
      {links.map((item, index) => (
        <React.Fragment key={index}>
          {index < links.length - 1 ? (
            <Link to={item.url} className={styles.btn}>
              {item.label}
            </Link>
          ) : (
            <div className={`${styles.btn} ${styles.active}`}>{item.label}</div>
          )}
          {index < links.length - 1 && <div className={styles.line}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}
