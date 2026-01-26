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

  // Достаем данные из Redux
  const products = useSelector(state => state.categories.categoryProducts)
  const categoryTitle = useSelector(state => state.categories.categoryTitle)

  useEffect(() => {
    dispatch(fetchCategory(id))
  }, [dispatch, id])

  return (
    <div className={styles.section}>
      {/* 1. Хлебные крошки. Передаем title, чтобы было: Main -> Categories -> Toys */}
      <Breadcrumbs title={categoryTitle} />

      {/* 2. Заголовок категории (Toys, Dry Food и т.д.) */}
      <h2 className={styles.title}>{categoryTitle}</h2>

      {/* 3. Тут будет фильтрация (FilterBar), пока оставим место */}
      <div className={styles.filters}>
        {/* <FilterBar /> — добавим позже */}
      </div>

      {/* 4. Сетка товаров */}
      <div className={styles.list}>
        {products.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            discont_price={item.discont_price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}