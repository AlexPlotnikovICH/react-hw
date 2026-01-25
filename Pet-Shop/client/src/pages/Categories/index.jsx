import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { CategoryCard } from '../../components/CategoryCard'
import styles from './Categories.module.css'

import { Breadcrumbs } from '../../components/Breadcrumbs'

export const CategoriesPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.list)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    // класс контейнера страницы
    <section className={styles.section}>
      <Breadcrumbs />

      {/* класс для сетки */}
      <div className={styles.list}>
        {categories.map(item => (
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
