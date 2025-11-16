import React from 'react'
import Post from '../post'
import styles from './styles.module.css'

function PostList({ posts, onLoadMore, onPostDelete }) {
  return (
    <div className={styles.listContainer}>
      {/* 2. "Рисуем" список постов, которые нам дали */}
      {posts.map(post => (
        <Post
          key={post.id} // <-- 'key' обязателен!
          title={post.title || 'Заголовок'}
          body={post.text || 'ТЕКСТ ПОСТА'}
          postId={post.id}
          avatarUrl={post.avatar}
          onDelete={onPostDelete}
          userName={post.userName}
        />
      ))}

      <button className={styles.loadMoreButton} onClick={onLoadMore}>
        Далее
      </button>
    </div>
  )
}

export default PostList
