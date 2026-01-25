import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.css'

// Компонент принимает данные снаружи.
// image - ссылка на картинку с сервера
export const CategoryCard = ({ id, title, image }) => {
  return (
    <Link to={`/categories/${id}`} className={styles.card}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        className={styles.image}
      />
      <p className={styles.title}>{title}</p>
    </Link>
  )
}
