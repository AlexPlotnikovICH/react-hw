import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './CatImage.module.css'

const CatImage = () => {
  // Создаем состояние для хранения URL картинки
  const [imageUrl, setImageUrl] = useState('')
  // Состояние для отслеживания загрузки
  const [loading, setLoading] = useState(true)
  // Функция для загрузки картинки
  const fetchCatImage = async () => {
    setLoading(true) // Начинаем загрузку
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      )
      // API возвращает массив, берем первый элемент: [{ id:..., url: "..." }]
      setImageUrl(response.data[0].url)
    } catch (error) {
      console.error('Error fetching cat image:', error)
    } finally {
      setLoading(false) // Заканчиваем загрузку в любом случае
    }
  }

  // 6. Используем useEffect, чтобы загрузить первую картинку при "рождении"
  useEffect(() => {
    fetchCatImage()
  }, [])

  return (
    <div className={styles.card}>
      {' '}
      {/* Обернули в карточку для красоты */}
      <div className={styles.imageContainer}>
        {loading ? (
          <div className={styles.loader}></div>
        ) : imageUrl ? (
          <img src={imageUrl} alt='Random Cat' className={styles.image} />
        ) : (
          <p className={styles.placeholder}>Не удалось загрузить котика :(</p>
        )}
      </div>
      {/* 7. Кнопка вызывает ту же функцию fetchCatImage */}
      <button
        className={styles.button}
        onClick={fetchCatImage}
        disabled={loading}
      >
        NEXT CAT{' '}
      </button>
    </div>
  )
}
export default CatImage
