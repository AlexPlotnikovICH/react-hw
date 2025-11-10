import React from 'react'
import styles from './styles.module.css'

function Post() {
  return (
    <div className={styles.postCard}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}></div>
          <span>User logo</span>
        </div>
        <span className={styles.postId}>id поста</span>
      </div>

      <div className={styles.body}>
        <h3>Заголовок</h3>
        <p>ТЕКСТ ПОСТА</p>
      </div>

      <div className={styles.footer}>
        <button className={styles.deleteButton}>Удалить</button>
      </div>
    </div>
  )
}

export default Post
