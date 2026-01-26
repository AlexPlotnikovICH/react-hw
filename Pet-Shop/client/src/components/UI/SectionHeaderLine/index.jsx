import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SectionHeaderLine.module.css'

export const SectionHeaderLine = ({ title, btnText, btnLink }) => {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
      <Link to={btnLink} className={styles.btn}>
        {btnText}
      </Link>
    </div>
  )
}