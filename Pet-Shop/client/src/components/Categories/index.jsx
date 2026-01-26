import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Link нам тут больше не нужен, он внутри компонента
import styles from './Categories.module.css'
import { CategoryCard } from '../CategoryCard'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { SectionHeaderLine } from '../UI/SectionHeaderLine'

export const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.list)
  const [list, setList] = useState([])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    if (!categories || categories.length === 0) return

    const timer = setTimeout(() => {
      const shuffled = [...categories]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)

      setList(shuffled)
    }, 0)

    return () => clearTimeout(timer)
  }, [categories])

  return (
    <section className={styles.section}>
      <SectionHeaderLine 
        title="Categories" 
        btnText="All categories" 
        btnLink="/categories" 
      />

      <div className={styles.list}>
        {list.map(item => (
          <CategoryCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            link='/categories'
          />
        ))}
      </div>
    </section>
  )
}