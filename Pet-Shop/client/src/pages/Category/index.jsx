import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/slices/categoriesSlice'
import { ProductCard } from '../../components/ProductCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { FilterBar } from '../../components/FilterBar' // Импортируем наш компонент
import styles from './Category.module.css'

export const Category = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // 1. Получаем данные из Redux
  const products = useSelector(state => state.categories.categoryProducts)
  const categoryTitle = useSelector(state => state.categories.categoryTitle)

  // --- ЛОКАЛЬНЫЙ СТЕЙТ ФИЛЬТРОВ ---
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('default')
  const [isDiscounted, setIsDiscounted] = useState(false)

  useEffect(() => {
    dispatch(fetchCategory(id))
  }, [dispatch, id])

  // --- ЛОГИКА ФИЛЬТРАЦИИ И СОРТИРОВКИ ---
  // (Точно такая же, как на странице All Products)
  const filteredProducts = (products || [])
    .filter(product => {
      const currentPrice = product.discont_price ?? product.price

      // Фильтр по цене
      if (minPrice && currentPrice < +minPrice) return false
      if (maxPrice && currentPrice > +maxPrice) return false

      // Фильтр по чекбоксу
      if (isDiscounted && !product.discont_price) return false

      return true
    })
    .sort((a, b) => {
      const priceA = a.discont_price ?? a.price
      const priceB = b.discont_price ?? b.price

      if (sort === 'newest') return b.id - a.id
      if (sort === 'price-high-low') return priceB - priceA
      if (sort === 'price-low-high') return priceA - priceB
      return a.id - b.id
    })

  // Обработчик цены
  const handlePriceChange = (type, value) => {
    if (value < 0) return
    if (type === 'min') setMinPrice(value)
    if (type === 'max') setMaxPrice(value)
  }

  // Хлебные крошки
  const categoryLinks = [
    { label: 'Main page', url: '/' },
    { label: 'Categories', url: '/categories' },
    { label: categoryTitle || 'Loading...', url: `/categories/${id}` },
  ]

  return (
    <main className='container'>
      <Breadcrumbs links={categoryLinks} />

      <h2 className={styles.title}>{categoryTitle}</h2>

      {/* Вставляем FilterBar */}
      <FilterBar
        minPrice={minPrice}
        maxPrice={maxPrice}
        sort={sort}
        isDiscounted={isDiscounted}
        onPriceChange={handlePriceChange}
        onSortChange={setSort}
        onDiscountChange={setIsDiscounted}
        showDiscount={true} // Чекбокс включен!
      />

      <div className={styles.list}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <ProductCard
              key={item.id}
              {...item} // свойства (id, title, price, image и т.д.)
            />
          ))
        ) : (
          <p>No products found based on your filters.</p>
        )}
      </div>
    </main>
  )
}
