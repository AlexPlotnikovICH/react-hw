import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Categories.module.css'
import { CategoryCard } from '../CategoryCard'
import { fetchCategories } from '../../redux/slices/categoriesSlice'

export const Categories = () => {
  const dispatch = useDispatch()

  //Достаем категории из Redux
  const categories = useSelector(state => state.categories.list)

  // Локальное состояние для случайного списка
  const [list, setList] = useState([])

  // Загружаем данные с сервера (если их нет)
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  // Следим за categories: как только они пришли, перемешиваем
  useEffect(() => {
    // Защита от пустых данных
    if (!categories || categories.length === 0) return

    // Перемешивание с задержкой (Trick)
    // setTimeout переносит выполнение в "следующий тик" работы браузера
    const timer = setTimeout(() => {
      const shuffled = [...categories]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)

      setList(shuffled)
    }, 0)

    // Очистка таймера, если компонент удалится раньше времени (хороший тон)
    return () => clearTimeout(timer)
  }, [categories])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.list}>
        {/* Рендерим уже подготовленный список list */}
        {list.map(item => (
          <CategoryCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
  )
}
