import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // ВОТ ЭТА СТРОКА НУЖНА
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { CategoryCard } from '../../components/CategoryCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './Categories.module.css'

export const CategoriesPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.list)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const categoriesLinks = [
    { label: 'Main page', url: '/' },
    { label: 'Categories', url: '/categories' },
  ]

  return (
    <section className='container'>
      {' '}
      <Breadcrumbs links={categoriesLinks} />
      <h1 className={styles.title}>Categories</h1>
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
