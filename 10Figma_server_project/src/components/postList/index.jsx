// src/components/postList/index.jsx

import React from 'react'
// Импортируем "кирпичик" Post
import Post from '../post' // Используем "умный" импорт папки
// Импортируем стили для кнопки "Далее"
import styles from './styles.module.css'

// 1. Компонент "глупый". Он получает 'posts' от "Мозга" (App)
function PostList({ posts, onLoadMore }) {
  return (
    <div className={styles.listContainer}>
      {/* 2. "Рисуем" список постов, которые нам дали */}
      {posts.map(post => (
        <Post
          key={post.id} // <-- 'key' обязателен!
          // (Пока что в API нет title и body,
          // так что используем заглушки или то, что есть)
          title={post.title || 'Заголовок'}
          body={post.text || 'ТЕКСТ ПОСТА'}
          postId={post.id}
        />
      ))}

      {/* 3. Кнопка "Далее" из макета */}
      <button className={styles.loadMoreButton} onClick={onLoadMore}>
        Далее
      </button>
    </div>
  )
}

export default PostList
