import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/slices/categoriesSlice'
import styles from './Category.module.css'

import { ProductCard } from '../../components/ProductCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const Category = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // 1. Получаем данные из Redux
  const products = useSelector(state => state.categories.categoryProducts)
  const categoryTitle = useSelector(state => state.categories.categoryTitle)

  useEffect(() => {
    // Запрашиваем данные конкретной категории при загрузке или смене id
    dispatch(fetchCategory(id))
  }, [dispatch, id])

  // 2. Формируем динамический путь для хлебных крошек
  const categoryLinks = [
    { label: 'Main page', url: '/' },
    { label: 'Categories', url: '/categories' },
    { label: categoryTitle || 'Loading...', url: `/categories/${id}` },
  ]

  return (
    // Используем глобальный класс container для центрирования
    <main className='container'>
      {/* Передаем массив ссылок в универсальный компонент */}
      <Breadcrumbs links={categoryLinks} />

      {/* Заголовок категории из бэкенда */}
      <h2 className={styles.title}>{categoryTitle}</h2>

      {/* Блок для будущих фильтров */}
      <div className={styles.filters}>
        {/* <FilterBar /> — добавим позже */}
      </div>

      {/* Сетка товаров данной категории */}
      <div className={styles.list}>
        {products && products.length > 0 ? (
          products.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              discont_price={item.discont_price}
              image={item.image}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </main>
  )
}
