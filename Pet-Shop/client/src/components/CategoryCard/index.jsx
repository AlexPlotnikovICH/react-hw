import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.css'

export const CategoryCard = ({ id, title, image, link }) => {
  const targetLink = link ? link : `/categories/${id}`

  return (
    <Link to={targetLink} className={styles.card}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
    </Link>
  )
}
