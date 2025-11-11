import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from './styles.module.css' // (Или styles.module.css, как у тебя)

// 4. Принимаем 'onPostCreated' (подарок из App.jsx)
function PostForm({ onPostCreated }) {
  // 5. Инициализируем "мозг" формы
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // 6. Эта функция сработает, если валидация прошла
  const onSubmit = async data => {
    try {
      // 7. Отправляем новый пост на сервер
      const response = await axios.post(
        'https://691226cf52a60f10c820ce89.mockapi.io/posts',
        data
      )

      // 8. "Кричим" в App.jsx: "Я создал пост! Вот он!"
      onPostCreated(response.data)

      // 9. Очищаем поля ввода
      reset()
    } catch (error) {
      console.error('Ошибка при создании поста:', error)
    }
  }

  return (
    // 10. 'handleSubmit' "оборачивает" нашу 'onSubmit'
    <form className={styles.formCard} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>

        <div className={styles.inputFields}>
          {/* 11. "Регистрируем" поле 'title' */}
          <input
            type='text'
            placeholder='Заголовок'
            className={styles.input}
            // 'title' - имя поля
            // 'required' - правило валидации
            {...register('title', { required: 'Заголовок обязателен!' })}
          />
          {/* 12. Показываем ошибку, если она есть */}
          {errors.title && (
            <span className={styles.error}>{errors.title.message}</span>
          )}

          {/* 11. "Регистрируем" поле 'text' */}
          <textarea
            placeholder='Введите текст...'
            className={styles.textarea}
            {...register('text', { required: 'Текст не может быть пустым' })}
          />
          {errors.text && (
            <span className={styles.error}>{errors.text.message}</span>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <button type='submit' className={styles.submitButton}>
          Публикация
        </button>
      </div>
    </form>
  )
}

export default PostForm
