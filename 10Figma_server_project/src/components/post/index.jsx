import React from 'react'
import styles from './styles.module.css'

function Post({ title, body, postId, onDelete, avatarUrl, userName }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src={avatarUrl}
            alt='User Avatar'
            className={styles.avatar} // Стиль .avatar уже сделает его круглым
          />
          <span className={styles.userName}>{userName}</span>
        </div>
        {/* 2. Отображаем реальный ID, который пришел */}
        <span className={styles.postId}>id: {postId}</span>
      </div>

      <div className={styles.body}>
        <h3>{title}</h3>
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
