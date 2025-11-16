import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Header from './components/header'
import PostList from './components/postList'
import PostForm from './components/postForm'
// тут свою аватарку с гитхаба запиливаю
const MY_GITHUB_AVATAR =
  'https://avatars.githubusercontent.com/AlexPlotnikovICH'
// Константа для пагинации
const POSTS_PER_PAGE = 3

function App() {
  // --- 2. "Мозг" для ВСЕХ постов ---
  const [posts, setPosts] = useState([])

  // --- 3. "Мозг" для ПАГИНАЦИИ ---
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE)

  // --- 4. Загрузка постов (при "рождении") ---
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://691226cf52a60f10c820ce89.mockapi.io/posts'
        )
        // Сортируем посты так, чтобы новые были вверху
        setPosts(response.data.reverse())
      } catch (error) {
        console.error('Ошибка при загрузке постов:', error)
      }
    }
    fetchPosts()
  }, []) // [] = один раз

  // --- 5. "Секретная" функция для PostForm ---
  // (Этот "подарок" PostForm вызовет, когда создаст пост)
  const handlePostCreated = newPost => {
    //Принудительно закалачиваю аватарку
    newPost.avatar = MY_GITHUB_AVATAR
    // Добавляем новый пост в НАЧАЛО нашего 'state'
    setPosts([newPost, ...posts])
    // (Это автоматически обновит 'visiblePosts' на след. рендере)
  }

  // ---  Удаление поста ---
  const handlePostDelete = async postId => {
    try {
      // 1. Отправляем запрос на удаление на сервер
      await axios.delete(
        `https://691226cf52a60f10c820ce89.mockapi.io/posts/${postId}`
      )

      // 2. Обновляем наш state, убирая удаленный пост
      setPosts(currentPosts => currentPosts.filter(post => post.id !== postId))
    } catch (error) {
      console.error('Ошибка при удалении поста:', error)
    }
  }
  // --- 6. Функция для кнопки "Далее" ---
  const loadMorePosts = () => {
    setVisiblePostsCount(prevCount => prevCount + POSTS_PER_PAGE)
  }

  // --- 7. "Нарезаем" посты (Логика пагинации) ---
  const visiblePosts = posts.slice(0, visiblePostsCount)

  // --- 8. Рендер ---
  return (
    <div className='app'>
      <Header />

      <main className='content'>
        <section className='columnLeft'>
          <h2>Список постов</h2>
          {/* "Кормим" PostList "нарезанными" постами
              и "дарим" ему функцию "Далее" */}
          <PostList
            posts={visiblePosts}
            onLoadMore={loadMorePosts}
            onPostDelete={handlePostDelete} // <-- "Дарим" функцию удаления
          />
        </section>

        <section className='columnRight'>
          <h2>Написать пост</h2>
          {/* "Дарим" PostForm функцию "Слушатель" */}
          <PostForm onPostCreated={handlePostCreated} />
        </section>
      </main>
    </div>
  )
}

export default App
