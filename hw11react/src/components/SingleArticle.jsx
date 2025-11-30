import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import styles from './SingleArticle.module.css'

const SingleArticle = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Статья {id}</h1>
      <p>
        Содержание статьи {id}. Здесь мог бы быть очень длинный и интересный
        текст про React, котиков или космос.
      </p>

      <hr />

      <p className={styles.pathInfo}>Текущий путь: {location.pathname}</p>

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  )
}

export default SingleArticle
