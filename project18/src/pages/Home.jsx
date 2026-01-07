import React from 'react'
import styles from './Home.module.css'

// 1. Импортируем компонент Карточки
import Card from '../components/Card/Card'

// 2. Импортируем базу данных (проверь, добавил ли ты export default в data.js!)
import data from '../assets/data'
import bannerImg from '../assets/banner.png' // Твой баннер

function Home() {
  return (
    <div className={styles.content}>
      {/* Баннер */}
      <img className={styles.banner} src={bannerImg} alt='Banner' />

      <h1 className={styles.title}>Товары</h1>

      {/* Сетка товаров */}
      <div className={styles.sneakersGrid}>
        {/* Здесь мы пробегаемся по массиву data.
            item - это конкретный кроссовок (объект из массива).
            index - его номер по порядку.
        */}
        {data.map((item, index) => (
          <Card
            key={item.id || index} // React требует уникальный ключ для списков
            name={item.name} // Передаем название
            price={item.price} // Передаем цену
            image={item.image} // Передаем картинку
            onClickPlus={() => console.log('Нажали плюс:', item.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
