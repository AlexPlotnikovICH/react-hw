import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from './styles.module.css'

function PostForm({ onPostCreated }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        'https://691226cf52a60f10c820ce89.mockapi.io/posts',
        data
      )

      onPostCreated(response.data)

      reset()
    } catch (error) {
      console.error('Ошибка при создании поста:', error)
    }
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <img
          src='https://avatars.githubusercontent.com/AlexPlotnikovICH'
          alt='Мой Аватар'
          className={styles.avatar}
        />

        <div className={styles.inputFields}>
          <input
            type='text'
            placeholder='Ваше имя'
            className={styles.input}
            {...register('userName', { required: 'Имя обязательно!' })}
          />
          {errors.userName && (
            <span className={styles.error}>{errors.userName.message}</span>
          )}
          {/* ------------------------- */}
          <input
            type='text'
            placeholder='Заголовок'
            className={styles.input}
            style={{ marginTop: '10px' }}
            {...register('title', { required: 'Заголовок обязателен!' })}
          />
          {errors.title && (
            <span className={styles.error}>{errors.title.message}</span>
          )}

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
