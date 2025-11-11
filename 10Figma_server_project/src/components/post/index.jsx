import React from 'react'
import styles from './styles.module.css'

// 1. БЫЛО: function Post() {
//    СТАЛО: (Мы "принимаем" props)
function Post({ title, body, postId, onDelete }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}></div>
          <span>User logo</span>
        </div>
        {/* 2. Отображаем реальный ID, который пришел */}
        <span className={styles.postId}>id: {postId}</span>
      </div>

      <div className={styles.body}>
        {/* 3. БЫЛО: <h3>Заголовок</h3> */}
        {/* СТАЛО: (Используем prop 'title') */}
        <h3>{title}</h3>

        {/* 4. БЫЛО: <p>ТЕКСТ ПОСТА</p> */}
        {/* СТАЛО: (Используем prop 'body') */}
        <p>{body}</p>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(postId)}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default Post
