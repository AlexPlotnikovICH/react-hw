import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../../components/ProductCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { FilterBar } from '../../components/FilterBar'
import styles from './AllSalesPage.module.css'

export const AllSalesPage = () => {
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.products)

  // --- ЛОКАЛЬНЫЙ СТЕЙТ ---
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('default')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // --- ЛОГИКА ФИЛЬТРАЦИИ ---
  const filteredProducts = list
    .filter(product => {
      // 1. Только товары со скидкой
      if (!product.discont_price) return false

      const currentPrice = product.discont_price

      // 2. Фильтр по цене
      if (minPrice && currentPrice < +minPrice) return false
      if (maxPrice && currentPrice > +maxPrice) return false

      return true
    })
    .sort((a, b) => {
      const priceA = a.discont_price
      const priceB = b.discont_price

      if (sort === 'newest') return b.id - a.id
      if (sort === 'price-high-low') return priceB - priceA
      if (sort === 'price-low-high') return priceA - priceB
      return a.id - b.id
    })

  const handlePriceChange = (type, value) => {
    if (value < 0) return
    if (type === 'min') setMinPrice(value)
    if (type === 'max') setMaxPrice(value)
  }

  // Данные для компонента хлебных крошек
  const salesLinks = [
    { label: 'Main page', url: '/' },
    { label: 'All sales', url: '/all_sales' }, // Проверь url в роутере, обычно это 'sales'
  ]

  return (
    // 1. Внешняя обертка для отступа сверху
    <section className={styles.section}>
      {/* 2. Глобальный контейнер для ширины */}
      <div className='container'>
        {/* Компонент крошек оставляем как был */}
        <Breadcrumbs links={salesLinks} />

        {/* Глобальный класс заголовка */}
        <h1 className='page-title'>Discounted items</h1>

        <FilterBar
          minPrice={minPrice}
          maxPrice={maxPrice}
          sort={sort}
          onPriceChange={handlePriceChange}
          onSortChange={setSort}
          showDiscount={false}
        />

        <div className={styles.productList}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p>No sales found based on your filters.</p>
          )}
        </div>
      </div>
    </section>
  )
}
